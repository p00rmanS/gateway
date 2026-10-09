/* Makes translation-review.csv: every line of the guide, English next to each language,
   so a native speaker can check it in Excel / Google Sheets.
   Run:  node tests/export-review.js */
const fs = require("fs");
const path = require("path");
global.self = global;
require("../js/i18n.js");
const I = self.I18N;
const langs = Object.keys(I);

// Flatten one language into { "section.path": "text" }
function flat(obj, prefix = "", out = {}) {
  if (typeof obj === "string") out[prefix] = obj;
  else if (Array.isArray(obj)) obj.forEach((x, i) => flat(x, `${prefix}[${(x && x.id) || i}]`, out));
  else if (obj && typeof obj === "object") for (const k of Object.keys(obj)) {
    if (k === "htmlLang" || k === "dir" || k === "id") continue;
    flat(obj[k], prefix ? `${prefix}.${k}` : k, out);
  }
  return out;
}
const rows = {};
for (const l of langs) rows[l] = flat(I[l]);
const keys = Object.keys(rows.en);
const q = (s) => `"${String(s ?? "").replace(/"/g, '""').replace(/\r?\n/g, "\n")}"`;
const header = ["where", ...langs.map((l) => `${l} (${I[l].name})`)];
const lines = [header.map(q).join(",")];
for (const k of keys) lines.push([k, ...langs.map((l) => rows[l][k])].map(q).join(","));
const file = path.join(__dirname, "..", "translation-review.csv");
fs.writeFileSync(file, "﻿" + lines.join("\r\n") + "\r\n", "utf8"); // BOM so Excel reads the accents and scripts correctly
console.log(`Wrote ${path.basename(file)}: ${keys.length} lines x ${langs.length} languages`);
