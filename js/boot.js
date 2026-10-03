/* Runs before the page paints (loaded without `defer`): applies the saved theme and text size,
   so the page never flashes dark or jumps in size. Light mode is the default. */
(function () {
  var root = document.documentElement;
  var theme = "light";
  var size = "1"; // 0 small · 1 normal · 2 large · 3 extra large · 4 largest
  try {
    theme = localStorage.getItem("gg_theme") || "light";
    var saved = localStorage.getItem("gg_fs");
    if (saved === null && localStorage.getItem("gg_size") !== null) {
      saved = String(+localStorage.getItem("gg_size") + 1); // the older 3-step setting (0–2)
    }
    if (saved !== null && /^[0-4]$/.test(saved)) size = saved;
  } catch (e) { /* storage blocked — use the defaults */ }
  root.dataset.theme = theme === "dark" ? "dark" : "light";
  root.dataset.size = size;
})();
