/* cta_circle.js — 21.10.2026, AutoClaw (осн. чат), приказ Рудольфа:
   кнопка «Записаться на консультацию» — КРУГЛАЯ, подпись СНАРУЖИ круга.
   Подключение (одна строка, после globe.js):
     <script src="cta_circle.js" defer></script>
   Без внешних ресурсов; уже круглую кнопку не трогает; внутри меню
   гида (.guide-card) кнопка остаётся компактной. */
(function () {
  "use strict";
  var EMOJI = /^([\uD800-\uDBFF][\uDC00-\uDFFF\uFE0F]?|[\u2600-\u27BF])\s*/;
  function round(a) {
    if (a.classList.contains("cta-round")) return;
    if (a.closest && a.closest(".guide-card")) return;
    var raw = (a.textContent || "").replace(/\s+/g, " ").trim();
    var m = raw.match(EMOJI);
    var ico = m ? m[1] : "\uD83C\uDFA5";
    var label = m ? raw.slice(m[0].length).trim() : raw;
    if (!label) label = raw;
    a.classList.add("cta-round");
    a.textContent = "";
    var ic = document.createElement("span");
    ic.className = "cta-ic";
    ic.setAttribute("aria-hidden", "true");
    ic.textContent = ico;
    var lb = document.createElement("span");
    lb.className = "cta-label";
    lb.textContent = label;
    a.appendChild(ic);
    a.appendChild(lb);
    a.setAttribute("aria-label", (ico + " " + label).trim());
  }
  function init() {
    var list = document.querySelectorAll("a.cta-zoom");
    for (var i = 0; i < list.length; i++) round(list[i]);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();