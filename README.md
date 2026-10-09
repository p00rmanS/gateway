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

## Before You Go: "Finished eating?" window

Before You Go is never locked. If a guest taps it in the first 28 minutes after the guide is first opened on a phone
(`ASK_WINDOW` in `js/app.js`), a small window asks "Finished eating?" with **Yes, continue** / **Not yet**. "Yes" opens it and
is remembered (`gg_done_eating`); "Not yet" stays where they are and asks again next time. After 28 minutes it opens with no
question. Preview with `?unlock=now` (skip the question) or `?unlock=reset` (ask again).

## Going back to the version without the timed unlock

The version before this feature is saved as git tag `backup-before-timed-unlock` and branch `backup/before-timed-unlock`.
To restore it: `git checkout backup-before-timed-unlock -- .` (or `git revert` the unlock commit).

## Run locally

```bash
python -m http.server 5288
```

Then open http://localhost:5288. Add `?time=18:20` to the address to preview the countdown and
activity statuses at a given Hawaiʻi time. Other preview helpers: `?busy=1` (busy popup), `?gate=1` (language picker),
`?gate=reset` (forget the saved language), `?lang=ja`.

Tests: `node tests/i18n.test.js` checks all languages. `node tests/export-review.js` writes `translation-review.csv`.

## Publishing updates

When you change anything, raise the `?v=` number on the CSS/JS links in `index.html`
and set `VERSION` in `sw.js` to the same number, so phones load the new version.

## "We are busy" notice

Pops up automatically every day from 4:30 PM to 7:30 PM Hawaiʻi time (once per guest per day, in their language), so nobody has to turn it on or off. To change the hours, edit `BUSY_FROM` and `BUSY_TO` near the top of the busy-notice section in `js/app.js`. Preview any time with `?busy=1` on the guest link.

## Checking the languages

Run `node tests/i18n.test.js` after adding or editing a language. It checks every language against English (same sections, all placeholders like {start} and {m} kept, no leftover English, flag file present, busy notice complete).
