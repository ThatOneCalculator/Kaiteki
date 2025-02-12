import 'package:json_annotation/json_annotation.dart';

part 'media_upload.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class MediaUpload {
  final int mediaId;
  final String mediaIdString;
  final int size;
  final int expiresAfterSecs;
  final String mediaKey;
  final MediaUploadImage image;

  const MediaUpload({
    required this.mediaId,
    required this.mediaIdString,
    required this.size,
    required this.expiresAfterSecs,
    required this.mediaKey,
    required this.image,
  });

  factory MediaUpload.fromJson(Map<String, dynamic> json) =>
      _$MediaUploadFromJson(json);

  Map<String, dynamic> toJson() => _$MediaUploadToJson(this);
}

@JsonSerializable(fieldRename: FieldRename.snake)
class MediaUploadImage {
  final String imageType;
  final int w;
  final int h;

  const MediaUploadImage({
    required this.imageType,
    required this.w,
    required this.h,
  });

  factory MediaUploadImage.fromJson(Map<String, dynamic> json) =>
      _$MediaUploadImageFromJson(json);

  Map<String, dynamic> toJson() => _$MediaUploadImageToJson(this);
}
