# Gateway Buffet Guest Guide

A mobile guest guide for Gateway Buffet at the Polynesian Cultural Center, in 16 languages
(English, Español, Português, Français, Deutsch, Nederlands, Tiếng Việt, 简体中文, 繁體中文, 한국어, 日本語,
Dansk, Српски, العربية, Italiano, ไทย). Arabic is shown right to left.

Servers show it to guests at the table: buffet tips, things to do before the night show
(with live open/closing status and a countdown to gates opening), and a mahalo with the
TripAdvisor review and email survey reminders.

## Features

- Three sections — Welcome Guide, Things to Do, Before You Go — switched with buttons, swipes, trackpad or ← → keys
- Light / dark mode (light-bulb button) and 5 text sizes for easy reading
- Server settings (name, show and gate times) saved on each phone
- QR code that opens the guide in the guest's language on their own phone
- Works offline and can be added to the home screen (needs https)

## Files

```
index.html            page markup
css/styles.css        all styling
js/boot.js            applies saved theme + text size before the page paints
js/i18n.js            all translations (see the notes at the top to add a language)
js/icons.js           line icons
js/app.js             app logic
sw.js                 offline support
manifest.webmanifest  home-screen app settings
assets/               flags, app icon, TripAdvisor logo
```

## Server setup (one staff link)

Staff open the guide with `?staff=1` on the end of the link (e.g. `https://your-site/?staff=1`). The first time, they see
"Select Your Name", pick from the list (`SERVERS` in `js/app.js`) and tap Start Guest Guide. The name is saved on that phone
(`gatewayServer`) and shows as "Your server today" on the Welcome Guide and as a soft mention in Before You Go.
To switch: settings (person icon) → Change Server. The QR code gives guests a link with the server's name but without the picker.

## Section 03 timed unlock

Before You Go is always visible in the navigation, but stays on a calm "available a little later" note for the
first 28 minutes after the guide is first opened on a phone (`UNLOCK_DELAY` in `js/app.js`). The first-visit time
and unlocked state are saved in localStorage (`gg_first_visit`, `gg_s3_unlocked`), so refreshing does not restart it.
It swaps to the full content on its own, with no popup or redirect. Preview with `?unlock=now`, `?unlock=reset`
or `?unlock=5` (5 minutes left).

## Going back to the version without the timed unlock

The version before this feature is saved as git tag `backup-before-timed-unlock` and branch `backup/before-timed-unlock`.
To restore it: `git checkout backup-before-timed-unlock -- .` (or `git revert` the unlock commit).

## Run locally

```bash
python -m http.server 5288
```

Then open http://localhost:5288. Add `?time=18:20` to the address to preview the countdown and
activity statuses at a given Hawaiʻi time.

## Publishing updates

When you change anything, raise the `?v=` number on the CSS/JS links in `index.html`
and set `VERSION` in `sw.js` to the same number, so phones load the new version.
