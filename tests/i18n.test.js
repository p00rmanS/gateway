/* Checks every language in js/i18n.js against English.
   Run:  node tests/i18n.test.js        (exits with an error if anything is wrong) */
const fs = require("fs");
const path = require("path");
global.self = global;
require("../js/i18n.js");
const I = self.I18N;
const en = I.en;
const problems = [];
const warn = [];
const bad = (lang, where, msg) => problems.push(`[${lang}] ${where}: ${msg}`);

const PLACEHOLDERS = ["{start}", "{gates}", "{m}", "{name}", "{link}", "{/link}"];
const placeholdersOf = (s) => PLACEHOLDERS.filter((p) => s.includes(p)).sort().join(",");

// Same shape as English: same keys, same array lengths, strings stay strings
function walk(lang, a, b, where) {
  if (typeof a === "string") {
    if (typeof b !== "string") return bad(lang, where, "should be text");
    if (!b.trim() && a.trim()) return bad(lang, where, "is empty");
    if (placeholdersOf(a) !== placeholdersOf(b)) bad(lang, where, `placeholders differ (en: ${placeholdersOf(a) || "none"}, here: ${placeholdersOf(b) || "none"})`);
    if (/[<>]/.test(b)) bad(lang, where, "contains < or > (would be treated as markup)");
    if (/\s{2,}(?!\n)/.test(b.replace(/\n/g, " ")) && /  /.test(b)) warn.push(`[${lang}] ${where}: double spaces`);
    if ((a.match(/\n/g) || []).length !== (b.match(/\n/g) || []).length) bad(lang, where, "paragraph count (line breaks) differs from English");
    if (/\{[a-z/]*\}/i.test(b.replace(/\{(start|gates|m|name|link|\/link)\}/g, ""))) bad(lang, where, "has a stray or misspelled {placeholder}");
    return;
  }
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) return bad(lang, where, `list length differs (en ${a.length}, here ${Array.isArray(b) ? b.length : "not a list"})`);
    a.forEach((x, i) => walk(lang, x, b[i], `${where}[${i}]`));
    return;
  }
  if (a && typeof a === "object") {
    if (!b || typeof b !== "object") return bad(lang, where, "missing");
    for (const k of Object.keys(a)) {
      if (!(k in b)) bad(lang, `${where}.${k}`, "missing");
      else walk(lang, a[k], b[k], `${where}.${k}`);
    }
    for (const k of Object.keys(b)) if (!(k in a) && !(where === "" && k === "dir")) bad(lang, `${where}.${k}`, "extra key not in English");
  }
}

const keys = Object.keys(I);
if (keys[0] !== "en") bad("en", "order", "English should be first");

for (const lang of keys) {
  const L = I[lang];
  if (lang !== "en") walk(lang, en, L, "");
  // identity / metadata
  if (!L.name || !L.htmlLang) bad(lang, "name/htmlLang", "missing");
  if (L.dir && L.dir !== "rtl" && L.dir !== "ltr") bad(lang, "dir", "must be rtl or ltr");
  if (lang === "ar" && L.dir !== "rtl") bad(lang, "dir", "Arabic must be rtl");
  try { new Intl.DateTimeFormat(L.htmlLang); } catch { bad(lang, "htmlLang", `"${L.htmlLang}" is not a valid language tag`); }
  // flag file
  const flag = path.join(__dirname, "..", "assets", "flags", `${lang}.svg`);
  if (!fs.existsSync(flag)) bad(lang, "flag", "assets/flags/" + lang + ".svg is missing");
  else if (!/^\s*<svg[\s>]/.test(fs.readFileSync(flag, "utf8"))) bad(lang, "flag", "file is not an SVG");
  // busy notice present and complete
  const b = L.busy;
  if (!b || !["title", "p1", "p2", "p3", "ok"].every((k) => b[k] && b[k].trim())) bad(lang, "busy", "notice text incomplete");
  // the lock-screen countdown needs {m}
  if (!L.close.locked.soon.includes("{m}")) bad(lang, "close.locked.soon", "needs {m}");
  if (!L.status.gatesIn.includes("{m}") || !L.status.gatesOpen.includes("{m}")) bad(lang, "status", "countdown texts need {m}");
  // the guide must still contain the allergy link markers exactly once
  const allergy = L.guide.items.find((i) => i.id === "allergy");
  if (!allergy || (allergy.text.match(/\{link\}/g) || []).length !== 1 || (allergy.text.match(/\{\/link\}/g) || []).length !== 1) bad(lang, "guide.allergy", "needs exactly one {link}...{/link}");
  // item ids unchanged
  L.guide.items.forEach((it, i) => { if (it.id !== en.guide.items[i].id) bad(lang, `guide.items[${i}].id`, "id changed"); });
  // the greeting must start with the Hawaiian greeting so the top bar can use its first word
  if (!/\S+\s?[!！]/.test(L.greet)) warn.push(`[${lang}] greet "${L.greet}" has no "!" (top bar shows the whole text)`);
  // left-over English: a non-English language should not reuse long English sentences
  if (lang !== "en") {
    const same = [];
    (function collect(a, b, w) {
      if (typeof a === "string") { if (a.length > 40 && a === b) same.push(w); }
      else if (Array.isArray(a)) a.forEach((x, i) => collect(x, b && b[i], `${w}[${i}]`));
      else if (a && typeof a === "object") for (const k of Object.keys(a)) collect(a[k], b && b[k], `${w}.${k}`);
    })(en, L, "");
    same.forEach((w) => bad(lang, w, "is still the English text"));
  }
  // rough length sanity: a translation shouldn't be tiny or enormous compared to English (CJK/Thai are shorter by nature)
  const cjk = ["zhs", "zht", "ja", "ko", "th"].includes(lang);
  const guideLen = (x) => x.guide.items.map((i) => i.text).join("").length;
  const ratio = guideLen(L) / guideLen(en);
  if (ratio > 2 || ratio < (cjk ? 0.2 : 0.5)) warn.push(`[${lang}] guide text length is ${ratio.toFixed(2)}x English - worth a read`);
}

// language names are unique, and no two languages share a key
const names = keys.map((k) => I[k].name);
if (new Set(names).size !== names.length) bad("all", "names", "two languages have the same name");

console.log(`${keys.length} languages checked: ${keys.join(", ")}`);
if (warn.length) console.log("\nNotes:\n  " + warn.join("\n  "));
if (problems.length) {
  console.error("\nPROBLEMS (" + problems.length + "):\n  " + problems.join("\n  "));
  process.exit(1);
}
console.log("\nAll language checks passed.");
