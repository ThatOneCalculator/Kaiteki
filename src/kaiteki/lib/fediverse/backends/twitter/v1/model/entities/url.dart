import 'package:json_annotation/json_annotation.dart';
import 'package:kaiteki/fediverse/backends/twitter/v1/model/entities/entity.dart';

part 'url.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class Url extends Entity {
  /// URL pasted/typed into Tweet.
  final String displayUrl;

  /// Expanded version of [display_url].
  final String expandedUrl;

  /// Wrapped URL, corresponding to the value embedded directly into the raw
  /// Tweet text, and the values for the indices parameter.
  final String url;

  const Url({
    required this.displayUrl,
    required this.expandedUrl,
    required this.url,
    required List<int> indices,
  }) : super(indices);

  factory Url.fromJson(Map<String, dynamic> json) => _$UrlFromJson(json);

  Map<String, dynamic> toJson() => _$UrlToJson(this);
}
