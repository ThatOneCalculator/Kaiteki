import 'package:collection/collection.dart';
import 'package:copy_with_extension/copy_with_extension.dart';
import 'package:kaiteki/fediverse/model/attachment.dart';
import 'package:kaiteki/fediverse/model/embed.dart';
import 'package:kaiteki/fediverse/model/emoji/emoji.dart';
import 'package:kaiteki/fediverse/model/formatting.dart';
import 'package:kaiteki/fediverse/model/reaction.dart';
import 'package:kaiteki/fediverse/model/user.dart';
import 'package:kaiteki/fediverse/model/user_reference.dart';
import 'package:kaiteki/fediverse/model/visibility.dart';

part 'post.g.dart';

/// A class representing a post.
@CopyWith()
class Post<T> {
  /// The original object.
  final T? source;
  final String id;

  // METADATA
  final DateTime postedAt;
  final User author;
  final bool nsfw;
  final Visibility? visibility;
  final bool pinned;

  // ENGAGEMENT
  /// Whether the user has liked (favorited) this post
  final bool liked;

  /// Whether the user has repeated (boosted, retweeted, etc.) this post
  final bool repeated;

  /// How many users have liked this post
  final int likeCount;

  /// How many users have repeated (boosted, retweeted, etc.) this post
  final int repeatCount;

  /// How many users have replied to this post
  final int replyCount;

  final bool bookmarked;

  /// What reactions this post has
  final List<Reaction> reactions;

  // CONTENT
  final String? subject;
  final String? content;
  final Formatting? formatting;
  final List<Attachment>? attachments;
  final List<Emoji>? emojis;

  final List<Embed> embeds;

  /// The client used to make this post.
  final String? client;

  // REPLYING
  final String? replyToPostId;
  final String? replyToUserId;
  final Post? replyTo;
  final User? replyToUser;

  final Post? repeatOf;
  final Post? quotedPost;

  final List<UserReference>? mentionedUsers;

  final String? externalUrl;

  Post({
    required this.source,
    required this.postedAt,
    required this.author,
    required this.id,
    this.reactions = const [],
    this.mentionedUsers = const [],
    this.attachments,
    this.bookmarked = false,
    this.content,
    this.embeds = const [],
    this.emojis,
    this.externalUrl,
    this.formatting = Formatting.plainText,
    this.likeCount = 0,
    this.liked = false,
    this.nsfw = false,
    this.pinned = false,
    this.quotedPost,
    this.repeatCount = 0,
    this.repeated = false,
    this.repeatOf,
    this.replyCount = 0,
    this.replyTo,
    this.replyToPostId,
    this.replyToUser,
    this.replyToUserId,
    this.subject,
    this.visibility,
    this.client,
  });

  factory Post.example() {
    return Post(
      author: User.example(),
      content: "Hello everyone!",
      source: null,
      postedAt: DateTime.now(),
      reactions: [],
      id: 'cool-post',
      visibility: Visibility.public,
    );
  }

  Post addOrCreateReaction(
    Emoji emoji,
    User? user, [
    bool replaceExisting = false,
  ]) {
    final List<Reaction> reactions;

    if (replaceExisting && this.reactions.any((r) => r.includesMe)) {
      reactions = removeOrDeleteReaction(emoji, user).reactions;
    } else {
      reactions = this.reactions;
    }

    final i = reactions.indexWhere((r) => r.emoji == emoji);

    if (i == -1) {
      reactions.add(Reaction(emoji: emoji, includesMe: true, count: 1));
    } else {
      final reaction = reactions[i];

      if (reaction.includesMe) return this; // noop

      reactions[i] = reaction.copyWith(
        includesMe: true,
        count: reaction.count + 1,
        users: reaction.users == null ? null : [...reaction.users!, user!],
      );
    }

    return copyWith.reactions(reactions);
  }

  Post removeOrDeleteReaction(Emoji emoji, User? user) {
    final reactions = this.reactions;

    final i = reactions.indexWhere((r) => r.emoji == emoji);

    if (i == -1) {
      throw Exception("Emoji not found");
    } else {
      final reaction = reactions[i];

      if (!reaction.includesMe) return this; // noop

      if (reaction.count == 1) {
        reactions.removeAt(i);
      } else {
        reactions[i] = reaction.copyWith(
          includesMe: false,
          count: reaction.count - 1,
          users: reaction.users?.whereNot((u) => u == user).toList(),
        );
      }
    }

    return copyWith.reactions(reactions);
  }
}
