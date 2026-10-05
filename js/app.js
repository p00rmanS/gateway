/* Gateway Buffet Guest Guide — app logic.
   Depends on window.I18N (js/i18n.js), window.icon (js/icons.js) and, optionally, window.QRCode (CDN).

   Preview helper: ?time=18:20 pretends it's that Hawaiʻi time (for checking countdowns and statuses). */
(() => {
  "use strict";

  const I18N = window.I18N;
  const icon = window.icon;
  const LANGS = Object.keys(I18N);
  const TABS = ["guide", "acts", "close"];

  /* ---------- Static config ---------- */
  const SCHEDULES = [
    { until: "19:30" },                            // Hukilau Marketplace
    { from: "15:00", to: "18:30", every: 20 },     // Lāʻie Tram Tour
    { from: "13:30", to: "18:30", every: 30 },     // Fire knife show
    { until: "19:00" }                             // Football Hall of Fame
  ];
  // Icon for each Welcome Guide item, by its id in js/i18n.js
  const GUIDE_ICONS = {
    self: "bell", buffet: "utensils", icecream: "icecream", plates: "plates", after: "stack",
    allergy: "leaf", restroom: "restroom", robot: "robot", charging: "charging", coupon: "tag"
  };
  const ACT_ICONS = ["bag", "tram", "flame", "trophy"];
  const ALLERGY_URL = "https://www.polynesia-allergy.com";
  const DEFAULT_START = "7:15";
  const DEFAULT_GATES = "6:50";
  const SOON_MINUTES = 30;
  const COUNTDOWN_WINDOW = 180;

  /* ---------- Helpers ---------- */
  const $ = (id) => document.getElementById(id);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const pad2 = (n) => String(n).padStart(2, "0");
  const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  // localStorage can throw (private mode, blocked storage) — never let that break the page.
  const store = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch { /* ignore */ } }
  };

  const isTime = (s) => /^\d{1,2}:\d{2}$/.test(s);

  /* ---------- State ---------- */
  const params = new URLSearchParams(location.search);

  function guessLang() {
    const fromUrl = params.get("lang");
    if (fromUrl && I18N[fromUrl]) return fromUrl;
    const nav = (navigator.language || "en").toLowerCase();
    if (nav.startsWith("zh")) return /tw|hk|mo|hant/.test(nav) ? "zht" : "zhs";
    return LANGS.find((k) => nav.startsWith(k)) || "en";
  }

  const state = {
    lang: guessLang(),
    tab: TABS.includes(params.get("tab")) ? params.get("tab") : "guide"
  };

  // Storage keys kept from the original page so servers' saved settings survive the upgrade.
  const settings = {
    name: store.get("gg_name") || "",
    start: store.get("gg_start2") || DEFAULT_START,
    gates: store.get("gg_gates") || DEFAULT_GATES,
    size: document.documentElement.dataset.size || "1",   // applied early by js/boot.js
    theme: document.documentElement.dataset.theme || "light"
  };

  const t = () => I18N[state.lang];

  /* ---------- Time (always Hawaiʻi time, regardless of the phone's zone) ---------- */
  const toMinutes = (hhmm) => {
    const [h, m] = String(hhmm).split(":").map(Number);
    return (h || 0) * 60 + (m || 0);
  };
  // Show times are entered as "7:15" and always mean the evening.
  const toEveningMinutes = (hhmm) => {
    const v = toMinutes(hhmm);
    return v < 12 * 60 ? v + 12 * 60 : v;
  };

  function nowInHawaii() {
    const fake = params.get("time");
    if (fake && isTime(fake)) return toMinutes(fake);
    try {
      const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "Pacific/Honolulu", hour: "numeric", minute: "numeric", hourCycle: "h23"
      }).formatToParts(new Date());
      const get = (type) => +parts.find((p) => p.type === type).value;
      return (get("hour") % 24) * 60 + get("minute");
    } catch {
      const d = new Date();
      return d.getHours() * 60 + d.getMinutes();
    }
  }

  function formatTime(minutes) {
    const d = new Date(Date.UTC(2024, 0, 1, Math.floor(minutes / 60), minutes % 60));
    try {
      return new Intl.DateTimeFormat(t().htmlLang, { hour: "numeric", minute: "2-digit", timeZone: "UTC", numberingSystem: "latn" }).format(d);
    } catch {
      return `${Math.floor(minutes / 60)}:${pad2(minutes % 60)}`;
    }
  }

  function activityStatus(schedule, now) {
    const s = t().status;
    if (schedule.every) {
      const from = toMinutes(schedule.from), to = toMinutes(schedule.to);
      if (now < from) return { kind: "next", label: `${s.next} ${formatTime(from)}` };
      const next = from + Math.ceil((now - from) / schedule.every) * schedule.every;
      if (next > to) return { kind: "ended", label: s.ended };
      const soon = to - now <= SOON_MINUTES;
      return { kind: soon ? "soon" : "open", label: soon ? s.soon : s.open, next: `${s.next} ${formatTime(next)}` };
    }
    const end = toMinutes(schedule.until);
    if (now >= end) return { kind: "ended", label: s.ended };
    if (now < 9 * 60) return null;
    return end - now <= SOON_MINUTES ? { kind: "soon", label: s.soon } : { kind: "open", label: s.open };
  }

  const fillTimes = (text) => text
    .replaceAll("{start}", settings.start)
    .replaceAll("{gates}", settings.gates);

  /* ---------- Views ---------- */
  const viewHead = (title) => `
    <header class="view-head">
      <p class="kicker">${pad2(TABS.indexOf(state.tab) + 1)} / ${pad2(TABS.length)}</p>
      <h2 class="view-head__title">${esc(title)}</h2>
    </header>`;

  // Text can contain "\n" for separate paragraphs.
  const paras = (text, cls, render = esc) =>
    String(text).split("\n").map((p) => `<p class="${cls}">${render(p)}</p>`).join("");

  // Closing line of a section, with an optional softer note underneath.
  const endline = (title, note) => `
    <div class="end">
      <p class="endline">${esc(title)}</p>
      ${note ? paras(note, "endnote") : ""}
    </div>`;

  // Text with an optional {link}…{/link} part (used by the allergy tip) becomes a tappable link.
  const EXTERNAL = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>`;
  const withLink = (text, url) => esc(text)
    .replace("{link}", `<a class="inline-link" href="${url}" target="_blank" rel="noopener">`)
    .replace("{/link}", `${EXTERNAL}</a>`);

  // Previous / next section buttons, labelled with the (already translated) tab names.
  const ARROW_L = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>`;
  const ARROW_R = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
  function pager() {
    const i = TABS.indexOf(state.tab), tabs = t().tabs;
    const prev = TABS[i - 1], next = TABS[i + 1];
    return `<nav class="pager" aria-label="Sections">
      ${prev ? `<button class="pager__btn" type="button" data-go="${prev}"><span class="pager__dir">${ARROW_L}</span><span class="pager__label">${esc(tabs[prev])}</span></button>` : ""}
      ${next ? `<button class="pager__btn pager__btn--next" type="button" data-go="${next}"><span class="pager__dir">${ARROW_R}</span><span class="pager__label">${esc(tabs[next])}</span></button>` : ""}
    </nav>`;
  }

  function viewGuide() {
    const { guide, tabs } = t();
    const steps = guide.items.map((item, i) => `
      <li class="step">
        <span class="step__num" aria-hidden="true">${pad2(i + 1)}</span>
        <div>
          <div class="item-head">
            <h3 class="step__title">${esc(item.title)}</h3>
            <span class="badge">${icon(GUIDE_ICONS[item.id] || "bell")}</span>
          </div>
          ${paras(item.text, "step__text", (p) => withLink(p, ALLERGY_URL))}
        </div>
      </li>`).join("");
    return viewHead(tabs.guide) + `<ol class="steps">${steps}</ol>` + endline(guide.foot, guide.footNote) + pager();
  }

  // Big countdown numeral, with the localised words around it ("Gates open in {m} min" / "開場まで{m}分").
  function countdown(template, minutes) {
    const [pre, post = ""] = template.split("{m}");
    return `
      <p class="count" role="status">
        <span class="count__pre">${esc(pre.trim())}</span>
        <span class="count__line"><span class="count__num">${minutes}</span><span class="count__post">${esc(post.trim())}</span></span>
      </p>`;
  }

  function viewActs() {
    const { acts, status, tabs } = t();
    const now = nowInHawaii();
    const gates = toEveningMinutes(settings.gates);
    const start = toEveningMinutes(settings.start);

    let count = "";
    if (now < gates && gates - now <= COUNTDOWN_WINDOW) count = countdown(status.gatesIn, gates - now);
    else if (now >= gates && now < start) count = countdown(status.gatesOpen, start - now);

    const ticket = `
      <section class="ticket" aria-label="${esc(acts.show.title)}">
        <div class="ticket__main">
          <h3 class="ticket__title">${esc(acts.show.title)}</h3>
          <span class="ticket__label">${esc(status.gates)}</span>
          <span class="ticket__time">${esc(formatTime(gates))}</span>
        </div>
        <div class="ticket__stub">
          <span class="ticket__label">${esc(status.starts)}</span>
          <span class="ticket__time">${esc(formatTime(start))}</span>
        </div>
      </section>`;

    const items = acts.items.map((item, i) => {
      const st = activityStatus(SCHEDULES[i], now);
      const statusLine = st ? `
        <p class="act__status"><b class="st-${st.kind}">${esc(st.label)}</b>${st.next ? `<span class="st-next">${esc(st.next)}</span>` : ""}</p>` : "";
      return `
        <li class="act${st && st.kind === "ended" ? " act--ended" : ""}">
          <div class="item-head">
            <div>
              ${statusLine}
              <h3 class="act__title">${esc(item.title)}</h3>
            </div>
            <span class="badge">${icon(ACT_ICONS[i])}</span>
          </div>
          ${item.subtitle ? `<strong class="act__subtitle">${esc(item.subtitle)}</strong>` : ""}
          ${item.text ? paras(item.text, "act__text") : ""}
          <p class="act__meta">${item.chips.map((c) => `<span>${esc(c)}</span>`).join("")}</p>
        </li>`;
    }).join("");

    return viewHead(tabs.acts)
      + count
      + ticket
      + paras(fillTimes(acts.show.text), "show-text")
      + `<h3 class="kicker section-label">${esc(acts.head)}</h3>`
      + `<ul class="acts">${items}</ul>`
      + endline(acts.foot, acts.footNote)
      + pager();
  }

  function viewClose() {
    const { close, status } = t();
    const name = settings.name.trim();

    const server = name ? `
      <p class="server">
        <span class="server__label">${esc(close.server)}</span>
        <span class="server__name">${esc(name)}</span>
      </p>` : "";

    const mahalo = `
      <section class="mahalo">
        <p class="kicker">03 / 03</p>
        <h2 class="mahalo__title">${esc(close.thanks.title)}</h2>
        ${paras(close.thanks.text, "mahalo__text")}
        ${server}
      </section>`;

    const review = `
      <section class="block">
        <div class="review-head">
          <img class="tripadvisor" src="assets/tripadvisor.png" alt="TripAdvisor" width="52" height="52">
          <div class="stars" aria-hidden="true">${icon("star").repeat(5)}</div>
        </div>
        <h3 class="block__title">${esc(close.review.title)}</h3>
        ${paras(close.review.text, "block__text")}
        <p class="scan">
          <span class="scan__steps" aria-hidden="true">${icon("qr")}${ARROW_R}<img src="assets/tripadvisor.png" alt="" width="30" height="30"></span>
          <span class="scan__text">
            ${esc(status.scanHint)}
            <small class="scan__note">${esc(close.qrNote)}</small>
          </span>
        </p>
      </section>`;

    const survey = `
      <section class="block">
        <h3 class="block__title">${esc(close.survey.title)}</h3>
        ${paras(close.survey.text, "block__text")}
      </section>`;

    return mahalo + review + survey + endline(close.end, close.endNote) + pager();
  }

  const VIEWS = { guide: viewGuide, acts: viewActs, close: viewClose };

  /* ---------- Render ---------- */
  function renderGreeting() {
    // Just the first exclamation of the greeting ("Aloha!", "¡Aloha!", "알로하!", "アロハ！"…), so any new language works too.
    const greet = t().greet;
    const m = greet.match(/^[^!！]*[!！]/);
    $("greet").textContent = m ? m[0].trim() : greet;
  }

  function renderChrome() {
    const lang = t();
    document.documentElement.lang = lang.htmlLang;
    document.documentElement.dir = lang.dir || "ltr"; // Arabic reads right to left
    renderGreeting();

    $$(".tab").forEach((btn) => {
      const selected = btn.dataset.tab === state.tab;
      btn.setAttribute("aria-selected", selected);
      btn.tabIndex = selected ? 0 : -1;
      btn.querySelector(".tab__label").textContent = lang.tabs[btn.dataset.tab];
    });
    $("panel").setAttribute("aria-labelledby", `tab-${state.tab}`);

    $$(".lang").forEach((btn) => btn.setAttribute("aria-pressed", btn.dataset.lang === state.lang));
    $("qrTitle").textContent = lang.qr;
  }

  /** enter: "up" | "next" | "prev" | null (no animation) */
  function render(enter = "up") {
    renderChrome();
    const panel = $("panel");
    panel.innerHTML = VIEWS[state.tab]();
    [...panel.children].forEach((el, i) => el.style.setProperty("--i", Math.min(i, 8)));

    panel.removeAttribute("data-enter");
    if (enter) {
      void panel.offsetWidth; // restart the entrance animation
      panel.dataset.enter = enter;
    }
  }

  function goTo(tab, { focus = false } = {}) {
    if (tab === state.tab) return;
    const dir = TABS.indexOf(tab) > TABS.indexOf(state.tab) ? "next" : "prev";
    state.tab = tab;
    hideSwipeHint();
    // Tiny tap on Android; only after a real touch (browsers block vibration before that)
    if (navigator.vibrate && navigator.userActivation?.hasBeenActive) navigator.vibrate(8);
    render(dir);

    const top = $("main").offsetTop - 50;
    if (window.scrollY > top) window.scrollTo({ top, behavior: reducedMotion() ? "auto" : "smooth" });
    if (focus) $(`tab-${tab}`).focus();
  }

  function setLang(lang) {
    if (lang === state.lang) return;
    const top = document.querySelector(".topbar");
    top.classList.add("is-swapping");
    setTimeout(() => {
      state.lang = lang;
      render("up");
      showSwipeHint(); // a new language usually means a new table of guests
      top.classList.remove("is-swapping");
    }, reducedMotion() ? 0 : 180);
  }

  /* ---------- Swipe hint: shown on load and language change, gone after the first swipe or tap ---------- */
  function showSwipeHint() {
    const hint = $("swipeHint"), panel = $("panel");
    hint.classList.remove("is-hidden");
    panel.removeAttribute("data-peek");
    void panel.offsetWidth;
    panel.dataset.peek = ""; // nudge the page sideways once, like it's about to slide
    clearTimeout(showSwipeHint.timer);
    showSwipeHint.timer = setTimeout(hideSwipeHint, 7000);
  }
  function hideSwipeHint() {
    $("swipeHint").classList.add("is-hidden");
    $("panel").removeAttribute("data-peek");
    clearTimeout(showSwipeHint.timer);
  }

  /* ---------- Language picker ---------- */
  function buildLanguagePicker() {
    const box = $("langs");
    box.innerHTML = `<span class="langs__icon" aria-hidden="true">${icon("globe")}</span>` + LANGS.map((k) => `
      <button class="lang" type="button" data-lang="${k}" lang="${I18N[k].htmlLang}" dir="auto" aria-pressed="false">
        <img class="lang__flag" src="assets/flags/${k}.svg" alt="" width="20" height="14" decoding="async" onerror="this.remove()">${esc(I18N[k].name)}
      </button>`).join("");

    box.addEventListener("click", (e) => {
      const btn = e.target.closest(".lang");
      if (!btn) return;
      setLang(btn.dataset.lang);
      btn.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    });
  }

  /* ---------- Tabs: click, arrow keys, and a swipe that follows the finger ---------- */
  function bindTabs() {
    $$(".tab").forEach((btn) => btn.addEventListener("click", () => goTo(btn.dataset.tab)));
    $("panel").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-go]");
      if (btn) goTo(btn.dataset.go);
    });

    $("tablist").addEventListener("keydown", (e) => {
      const i = TABS.indexOf(state.tab);
      const fwd = isRtl() ? -1 : 1;
      const next = { ArrowRight: i + fwd, ArrowLeft: i - fwd, Home: 0, End: TABS.length - 1 }[e.key];
      if (next === undefined) return;
      e.preventDefault();
      goTo(TABS[(next + TABS.length) % TABS.length], { focus: true });
    });

    bindSwipe();
    bindDesktopNavigation();
  }

  const isRtl = () => document.documentElement.dir === "rtl";

  const step = (dir) => {
    const i = TABS.indexOf(state.tab) + dir;
    if (i >= 0 && i < TABS.length) goTo(TABS[i]);
  };

  /* Finger/pen swipe on phones and tablets (Android, iPhone, iPad).
     Pointer Events + CSS `touch-action: pan-y` on .main: the browser keeps vertical scrolling,
     and hands every horizontal movement to us — no fighting with page scroll. */
  function bindSwipe() {
    const main = $("main"), panel = $("panel");
    let drag = null;

    const reset = (settle) => {
      if (settle) panel.classList.add("is-settling"); // spring back into place
      panel.classList.remove("is-dragging");
      panel.style.transform = "";
      panel.style.opacity = "";
      if (settle) setTimeout(() => panel.classList.remove("is-settling"), 350);
      drag = null;
    };

    main.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "mouse" || !e.isPrimary) return;
      drag = { id: e.pointerId, x: e.clientX, y: e.clientY, t: performance.now(), dx: 0, axis: null };
    });

    main.addEventListener("pointermove", (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      const mx = e.clientX - drag.x, my = e.clientY - drag.y;
      if (!drag.axis && Math.hypot(mx, my) > 8) drag.axis = Math.abs(mx) > Math.abs(my) * 0.8 ? "x" : "y";
      if (drag.axis !== "x") return;
      const i = TABS.indexOf(state.tab);
      const towardNext = isRtl() ? mx > 0 : mx < 0;
      const atEdge = (!towardNext && i === 0) || (towardNext && i === TABS.length - 1);
      drag.raw = mx;
      drag.dx = atEdge ? mx * .15 : mx * .5; // rubber-band at the first and last tab
      panel.classList.add("is-dragging");
      panel.removeAttribute("data-peek");
      hideSwipeHint();
      panel.style.transform = `translateX(${drag.dx}px)`;
      panel.style.opacity = String(1 - Math.min(Math.abs(drag.dx) / 500, .4));
    });

    const finish = (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      if (drag.axis !== "x") { drag = null; return; }
      const raw = drag.raw || 0;
      const speed = Math.abs(raw) / (performance.now() - drag.t); // px per ms
      const far = Math.abs(raw) > Math.min(90, main.clientWidth * .22);
      const flick = speed > .45 && Math.abs(raw) > 30;
      const dir = (raw < 0) !== isRtl() ? 1 : -1;
      const i = TABS.indexOf(state.tab) + dir;
      const commit = (far || flick) && i >= 0 && i < TABS.length;
      reset(!commit);
      if (commit) goTo(TABS[i]);
    };
    main.addEventListener("pointerup", finish);
    main.addEventListener("pointercancel", () => drag && reset(true));
  }

  /* Laptops and desktops: two-finger trackpad swipe, plus ← → keys anywhere on the page. */
  function bindDesktopNavigation() {
    let acc = 0, locked = false, idle;
    $("main").addEventListener("wheel", (e) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault(); // stop the browser's own swipe-to-go-back
      clearTimeout(idle);
      idle = setTimeout(() => { acc = 0; locked = false; }, 250);
      if (locked) return;
      acc += e.deltaX;
      if (Math.abs(acc) > 60) {
        locked = true; // one section per gesture
        hideSwipeHint();
        step((acc > 0) !== isRtl() ? 1 : -1);
      }
    }, { passive: false });

    document.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      if (e.altKey || e.ctrlKey || e.metaKey || document.querySelector("dialog[open]")) return;
      if (e.target.closest("input, textarea, [role=tablist], .langs")) return;
      step((e.key === "ArrowRight") !== isRtl() ? 1 : -1);
    });
  }

  /* ---------- Text size: Aa opens a panel with A− / slider / A+ (5 steps) ---------- */
  const MAX_SIZE = 4;

  function applySize() {
    const n = +settings.size;
    document.documentElement.dataset.size = settings.size;
    const range = $("sizeRange");
    range.value = settings.size;
    range.style.setProperty("--pct", `${(n / MAX_SIZE) * 100}%`);
    $$("#sizeDots i").forEach((dot, i) => dot.classList.toggle("is-on", i === n));
    $$(".sizer__btn").forEach((b) => { b.disabled = b.dataset.step === "-1" ? n === 0 : n === MAX_SIZE; });
  }

  function setSize(size) {
    settings.size = String(Math.min(Math.max(+size, 0), MAX_SIZE));
    store.set("gg_fs", settings.size);
    applySize();
  }

  function bindSizePanel() {
    const btn = $("sizeBtn"), panel = $("sizePanel");
    const open = (show) => {
      panel.hidden = !show;
      btn.setAttribute("aria-expanded", show);
    };
    btn.addEventListener("click", () => open(panel.hidden));
    $("sizeRange").addEventListener("input", (e) => setSize(e.target.value));
    $$(".sizer__btn").forEach((b) => b.addEventListener("click", () => setSize(+settings.size + +b.dataset.step)));
    // Close when tapping anywhere else, or with Escape
    document.addEventListener("pointerdown", (e) => {
      if (!panel.hidden && !panel.contains(e.target) && !btn.contains(e.target)) open(false);
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !panel.hidden) { open(false); btn.focus(); } });
    applySize();
  }

  /* ---------- Light / dark mode (light bulb) ---------- */
  function applyTheme() {
    const light = settings.theme !== "dark";
    document.documentElement.dataset.theme = light ? "light" : "dark";
    $("themeBtn").setAttribute("aria-pressed", light);
    $("themeColor").setAttribute("content", light ? "#f4ecdd" : "#14120f");
  }

  function bindTheme() {
    $("themeBtn").addEventListener("click", () => {
      settings.theme = settings.theme === "dark" ? "light" : "dark";
      store.set("gg_theme", settings.theme);
      applyTheme();
    });
    applyTheme();
  }

  /* ---------- Dialogs ---------- */
  function closeOnBackdrop(dialog) {
    dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });
  }

  function bindSettings() {
    const dlg = $("setDlg");
    const name = $("sName"), start = $("sStart"), gates = $("sGates");

    $("setBtn").addEventListener("click", () => {
      name.value = settings.name;
      start.value = settings.start;
      gates.value = settings.gates;
      dlg.showModal();
    });
    $("setCancel").addEventListener("click", () => dlg.close());

    $("setForm").addEventListener("submit", (e) => {
      const s = start.value.trim(), g = gates.value.trim();
      if ((s && !isTime(s)) || (g && !isTime(g))) { e.preventDefault(); return; }
      settings.name = name.value.trim();
      settings.start = s || DEFAULT_START;
      settings.gates = g || DEFAULT_GATES;
      store.set("gg_name", settings.name);
      store.set("gg_start2", settings.start);
      store.set("gg_gates", settings.gates);
      render(null);
    });

    closeOnBackdrop(dlg);
  }

  function bindQr() {
    const dlg = $("qrDlg");
    $("qrBtn").addEventListener("click", () => {
      const box = $("qrbox");
      box.textContent = "";
      const url = new URL(location.href);
      url.searchParams.set("lang", state.lang);
      url.searchParams.set("tab", state.tab);
      url.searchParams.delete("time");
      if (window.QRCode) {
        new window.QRCode(box, { text: url.toString(), width: 240, height: 240, correctLevel: window.QRCode.CorrectLevel.M });
      } else {
        box.textContent = "QR unavailable offline";
      }
      dlg.showModal();
    });
    $("qrClose").addEventListener("click", () => dlg.close());
    closeOnBackdrop(dlg);
  }

  /* ---------- Keep the screen awake while showing guests ---------- */
  function bindWakeLock() {
    let lock = null;
    async function wake() {
      if (!("wakeLock" in navigator) || lock) return;
      try {
        lock = await navigator.wakeLock.request("screen");
        lock.addEventListener("release", () => { lock = null; });
      } catch { /* not allowed — fine */ }
    }
    document.addEventListener("pointerdown", wake, { once: true });
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") wake(); });
  }

  /* ---------- Boot ---------- */
  buildLanguagePicker();
  bindTabs();
  bindSettings();
  bindQr();
  bindWakeLock();
  bindSizePanel();
  bindTheme();
  render("up");
  showSwipeHint();

  requestAnimationFrame(() => {
    const active = document.querySelector('.lang[aria-pressed="true"]');
    if (active) active.scrollIntoView({ inline: "center", block: "nearest" });
  });

  // Offline support + "Add to Home Screen" (service workers need https or localhost).
  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }

  // Live statuses and the countdown tick every 30 s; only Things to Do needs redrawing.
  setInterval(() => {
    if (state.tab === "acts" && !document.querySelector("dialog[open]")) render(null);
  }, 30_000);
})();
