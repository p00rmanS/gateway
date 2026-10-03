# Gateway Buffet Guest Guide

A mobile guest guide for Gateway Buffet at the Polynesian Cultural Center, in 11 languages
(English, Español, Português, Français, Deutsch, Nederlands, Tiếng Việt, 简体中文, 繁體中文, 한국어, 日本語).

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

## Run locally

```bash
python -m http.server 5288
```

Then open http://localhost:5288. Add `?time=18:20` to the address to preview the countdown and
activity statuses at a given Hawaiʻi time.

## Publishing updates

When you change anything, raise the `?v=` number on the CSS/JS links in `index.html`
and set `VERSION` in `sw.js` to the same number, so phones load the new version.
