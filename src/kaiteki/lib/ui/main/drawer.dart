import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:kaiteki/constants.dart' show appName;
import 'package:kaiteki/di.dart';
import 'package:kaiteki/theming/kaiteki/text_theme.dart';

class MainScreenDrawer extends ConsumerWidget {
  const MainScreenDrawer({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final l10n = context.getL10n();
    final account = ref.watch(accountProvider).current;
    final fontSize = Theme.of(context).textTheme.titleLarge?.fontSize;
    return Drawer(
      child: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: const EdgeInsets.symmetric(
                  horizontal: 18.0,
                  vertical: 16.0,
                ),
                child: Text(
                  appName,
                  style: Theme.of(context) //
                      .ktkTextTheme
                      ?.kaitekiTextStyle
                      .copyWith(fontSize: fontSize),
                ),
              ),
              ListTile(
                leading: const Icon(Icons.mail_rounded),
                title: Text(l10n.directMessagesTitle),
                enabled: false,
              ),
              ListTile(
                leading: const Icon(Icons.article_rounded),
                title: Text(l10n.listsTitle),
                enabled: false,
              ),
              ListTile(
                leading: const Icon(Icons.trending_up_rounded),
                title: Text(l10n.trendsTitle),
                enabled: false,
              ),
              ListTile(
                leading: const Icon(Icons.flag_rounded),
                title: Text(l10n.reportsTitle),
                enabled: false,
              ),
              const Divider(),
              ListTile(
                title: Text("@${account.key.username}@${account.key.host}"),
                enabled: false,
              ),
              ListTile(
                leading: const Icon(Icons.manage_accounts_rounded),
                title: Text(l10n.accountSettingsTitle),
                // onTap: () => context.push("/$handle/settings"),
                enabled: false,
              ),
              const Divider(),
              ListTile(
                leading: const Icon(Icons.settings_rounded),
                title: Text(l10n.settings),
                onTap: () => context.push("/settings"),
              ),
              ListTile(
                leading: const Icon(Icons.info_outline_rounded),
                title: Text(l10n.settingsAbout),
                onTap: () => context.push("/about"),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
