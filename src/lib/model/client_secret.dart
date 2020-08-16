import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:kaiteki/utils/logger.dart';
import 'package:kaiteki/utils/string_extensions.dart';
import 'package:shared_preferences/shared_preferences.dart';

class ClientSecret {
  static const bool usePreferences = true;

  String clientId;
  String clientSecret;
  String instance;

  ClientSecret(this.instance, this.clientId, this.clientSecret) {
    assert(this.instance != null);
    assert(this.clientId != null);
    assert(this.clientSecret != null);
  }

  ClientSecret.fromValue(String key, String value) {
    assert(key.substring(0, 2) == "c;", "Key doesn't have the correct prefix");

    instance = key.substring(2);

    var valueSplit = value.split(';');
    clientId = valueSplit[0];
    clientSecret = valueSplit[1];
  }

  String toKey() => "c;$instance";
  String toValue() => "$clientId;$clientSecret";

  static Future<ClientSecret> getSecret(String instance) async {
    Logger.debug("looking for client secret for $instance in secure storage");

    String secret;
    var key = "c;$instance";

    try {
      if (usePreferences) {
        var preferences = await SharedPreferences.getInstance();
        secret = preferences.getString(key);
      } else {
        var secureStorage = FlutterSecureStorage();
        secret = await secureStorage.read(key: key);
      }

    } catch (e) {
      print("Failed to read for secret:\n$e");
      return null;
    }

    if (secret.isNullOrEmpty) {
      Logger.debug("couldn't find secret for $instance");
      return null;
    }

    var clientSecret = ClientSecret.fromValue(key, secret);
    Logger.debug("found secret for $instance");
    return clientSecret;
  }

  Future<void> save() async {
    if (usePreferences) {
      var preferences = await SharedPreferences.getInstance();
      await preferences.setString(toKey(), toValue());
    } else {
      var secureStorage = FlutterSecureStorage();
      await secureStorage.write(
          key: toKey(),
          value: toValue()
      );
    }

  }
}