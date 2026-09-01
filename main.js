/* ============================================================
   dshenmusic.com — behavior
   i18n (EN base + per-language overlay) · countdown · GSAP reveals
   · video facade · accessible mobile menu
   ============================================================ */
(function () {
  "use strict";

  /* ---------------- i18n ---------------- */
  var I18N = {
    supported: ["en", "ru", "ro", "ua"],
    fallback: "en",
    base: null,        // EN dictionary (fallback for every locale)
    dict: {},          // active merged dictionary
    lang: "en",
    cache: {}          // lang -> dict | null
  };

  // Countdown copy also lives here so the chip works even if no JSON loads.
  var COUNTDOWN_FALLBACK = {
    "countdown.out_now": "Out now",
    "countdown.days_one": "Out July 24 — in {n} day",
    "countdown.days_other": "Out July 24 — in {n} days"
  };

  var RELEASE = new Date("2026-07-24T00:00:00"); // local time, per spec

  function mapLang(l) { return l === "ua" ? "uk" : l; } // BCP-47 for <html lang>/Intl

  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} }
  };

  function fetchDict(lang) {
    if (lang in I18N.cache) return Promise.resolve(I18N.cache[lang]);
    return fetch("i18n/" + lang + ".json", { cache: "no-cache" })
      .then(function (res) { if (!res.ok) throw new Error(String(res.status)); return res.json(); })
      .then(function (json) { I18N.cache[lang] = json; return json; })
      .catch(function () { I18N.cache[lang] = null; return null; });
  }

  function parseVars(spec) {
    var out = {};
    if (!spec) return out;
    spec.split(";").forEach(function (pair) {
      var i = pair.indexOf(":");
      if (i < 0) return;
      out[pair.slice(0, i).trim()] = pair.slice(i + 1).trim();
    });
    return out;
  }

  function applyAttrs(el) {
    var spec = el.getAttribute("data-i18n-attr");
    if (!spec) return;
    var vars = parseVars(el.getAttribute("data-i18n-var"));
    spec.split(";").forEach(function (pair) {
      var i = pair.indexOf(":");
      if (i < 0) return;
      var attr = pair.slice(0, i).trim();
      var key = pair.slice(i + 1).trim();
      var val = I18N.dict[key];
      if (val == null) return; // leave the inline default attribute in place
      val = val.replace(/\{(\w+)\}/g, function (m, name) {
        var vkey = vars[name];
        var vv = vkey != null ? I18N.dict[vkey] : null;
        return vv != null ? vv : m;
      });
      el.setAttribute(attr, val);
    });
  }

  function pluralCategory(lang, n) {
    try { return new Intl.PluralRules(mapLang(lang)).select(n); }
    catch (e) { return n === 1 ? "one" : "other"; }
  }

  function tr(key) {
    var v = I18N.dict[key];
    return v != null ? v : COUNTDOWN_FALLBACK[key];
  }

  function renderCountdown() {
    var days = Math.max(0, Math.ceil((RELEASE.getTime() - Date.now()) / 86400000));
    var text;
    if (days <= 0) {
      text = tr("countdown.out_now") || "Out now";
    } else {
      var cat = pluralCategory(I18N.lang, days);
      var tmpl = tr("countdown.days_" + cat) || tr("countdown.days_other") ||
                 tr("countdown.days_one") || "Out July 24 — in {n} days";
      text = tmpl.replace("{n}", String(days));
    }
    document.querySelectorAll("[data-countdown]").forEach(function (el) { el.textContent = text; });
  }

  // Date-gated blocks: [data-until="YYYY-MM-DDTHH:MM:SS"] (local time) drops out of the
  // DOM once that moment has passed, so a finished show never advertises itself. Removing
  // rather than hiding keeps GSAP reveals and the i18n pass off a dead node.
  function pruneExpired() {
    document.querySelectorAll("[data-until]").forEach(function (el) {
      var t = new Date(el.getAttribute("data-until")).getTime();
      if (!isNaN(t) && Date.now() >= t) el.remove();
    });
  }

  function applyDict() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var val = I18N.dict[el.getAttribute("data-i18n")];
      if (val != null) el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(applyAttrs);
    // Show elements gated to specific language(s) — e.g. the RU-only Yandex Music link.
    document.querySelectorAll("[data-lang-only]").forEach(function (el) {
      el.hidden = el.getAttribute("data-lang-only").split(/[,\s]+/).indexOf(I18N.lang) < 0;
    });
    if (I18N.dict["meta.title"]) document.title = I18N.dict["meta.title"];
    var md = document.querySelector('meta[name="description"]');
    if (md && I18N.dict["meta.description"]) md.setAttribute("content", I18N.dict["meta.description"]);
    renderCountdown();
  }

  function updateLangButtons(lang) {
    document.querySelectorAll(".lang__btn").forEach(function (b) {
      var on = b.getAttribute("data-lang") === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function persist(lang) {
    store.set("lang", lang);
    try {
      var url = new URL(window.location.href);
      if (lang === "en") url.searchParams.delete("lang");
      else url.searchParams.set("lang", lang);
      window.history.replaceState(null, "", url);
    } catch (e) {}
  }

  function setLang(lang, opts) {
    opts = opts || {};
    if (I18N.supported.indexOf(lang) < 0) lang = "en";
    I18N.lang = lang;
    var ensureBase = I18N.base != null ? Promise.resolve(I18N.base)
                                       : fetchDict("en").then(function (d) { I18N.base = d || {}; return I18N.base; });
    return ensureBase.then(function () {
      return lang === "en" ? I18N.base : fetchDict(lang);
    }).then(function (langDict) {
      var haveLang = langDict && Object.keys(langDict).length;
      I18N.dict = Object.assign({}, I18N.base, langDict || {});
      applyDict();
      updateLangButtons(lang);
      // If the locale file isn't there yet we show EN — mark <html> as EN to match the visible text.
      document.documentElement.lang = haveLang || lang === "en" ? mapLang(lang) : "en";
      if (opts.persist !== false) persist(lang);
    });
  }

  function initialLang() {
    var l = null;
    try { l = new URL(window.location.href).searchParams.get("lang"); } catch (e) {}
    if (!l) l = store.get("lang");
    return I18N.supported.indexOf(l) >= 0 ? l : "en";
  }

  function initI18n() {
    document.querySelectorAll(".lang__btn").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
    });
    setLang(initialLang(), { persist: false });
  }

  /* ---------------- GSAP scroll reveals ---------------- */
  var revealsDone = false;
  function initReveals() {
    if (revealsDone) return; // idempotent: may be called from both DOMContentLoaded and load
    revealsDone = true;
    var els = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // No GSAP, or reduced motion → leave everything visible (content is never hidden by CSS).
    if (reduce || !window.gsap || !window.ScrollTrigger || !els.length) return;
    window.gsap.registerPlugin(window.ScrollTrigger);
    function reveal(el) {
      var order = parseFloat(el.getAttribute("data-reveal-order")) || 0;
      window.gsap.to(el, { opacity: 1, y: 0, duration: 0.8, delay: order * 0.1, ease: "power2.out" });
    }
    els.forEach(function (el) {
      window.gsap.set(el, { opacity: 0, y: 24 });
      window.ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: function () { reveal(el); }
      });
    });
    // Elements anchored to the very bottom of the page (e.g. the footer copyright) can
    // never scroll high enough to reach "top 88%", so their own trigger never fires.
    // Reveal anything still hidden once the page bottom comes into view.
    function revealTail() {
      els.forEach(function (el) {
        if (parseFloat(window.getComputedStyle(el).opacity) === 0) reveal(el);
      });
    }
    window.ScrollTrigger.create({
      trigger: document.documentElement,
      start: "bottom bottom",
      once: true,
      onEnter: revealTail
    });
    window.ScrollTrigger.refresh();
    // Covers landing already at the bottom (e.g. a deep-link to #contact on load).
    requestAnimationFrame(function () {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) revealTail();
    });
  }

  /* ---------------- Video facade ---------------- */
  function initVideos() {
    document.querySelectorAll(".video__facade").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-video-id");
        if (!id) return;
        var v = btn.closest(".video");
        var titleEl = v && v.querySelector(".video__title");
        /* Cards without a .video__title (e.g. the Live aftermovie) carry a localized
           data-video-title instead, so the iframe title is never bare. */
        var title = titleEl ? titleEl.textContent.trim()
                            : (btn.getAttribute("data-video-title") || "Video");
        var iframe = document.createElement("iframe");
        // A vertical facade (a Short) hands its 9:16 aspect to the player it becomes.
        iframe.className = btn.classList.contains("video__facade--vert")
          ? "video__frame video__frame--vert" : "video__frame";
        // Any non-facade class on the button is layout (e.g. .live__nextvideo sizes the
        // teaser inside the show card) — the player takes the facade's place, so it needs it.
        btn.classList.forEach(function (c) {
          if (c.indexOf("video__facade") !== 0) iframe.classList.add(c);
        });
        iframe.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
        iframe.title = title;
        iframe.setAttribute("allow", "autoplay; encrypted-media; picture-in-picture; fullscreen");
        iframe.setAttribute("allowfullscreen", "");
        btn.replaceWith(iframe);
        if (iframe.focus) iframe.focus();
      });
    });
  }

  /* ---------------- Accessible mobile menu ---------------- */
  function initMenu() {
    var toggle = document.querySelector(".nav-toggle");
    var menu = document.getElementById("mobile-menu");
    if (!toggle || !menu) return;
    var closeBtn = menu.querySelector(".menu__close");
    var lastFocus = null;
    // Page regions to make inert while the dialog is open (everything except the menu itself).
    var background = [document.querySelector(".header"), document.getElementById("main"), document.getElementById("contact")];

    function focusables() {
      return Array.prototype.slice.call(menu.querySelectorAll('a[href], button:not([disabled])'));
    }
    function onKey(e) {
      if (e.key === "Escape") { close(); return; }
      if (e.key !== "Tab") return;
      var f = focusables();
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    function open() {
      lastFocus = document.activeElement;
      menu.hidden = false;
      menu.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      background.forEach(function (el) { if (el) el.setAttribute("inert", ""); });
      if (closeBtn) closeBtn.focus();
      document.addEventListener("keydown", onKey);
    }
    function close() {
      menu.classList.remove("is-open");
      menu.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      background.forEach(function (el) { if (el) el.removeAttribute("inert"); });
      document.removeEventListener("keydown", onKey);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    toggle.addEventListener("click", open);
    if (closeBtn) closeBtn.addEventListener("click", close);
    menu.querySelectorAll(".menu__link").forEach(function (l) { l.addEventListener("click", close); });
    var mq = window.matchMedia("(min-width:720px)");
    var onMq = function (e) { if (e.matches) close(); };
    if (mq.addEventListener) mq.addEventListener("change", onMq);
    else if (mq.addListener) mq.addListener(onMq);
  }

  /* ---------------- Boot ---------------- */
  // Core interactivity runs the moment this script executes — it must not wait on the
  // GSAP CDN (main.js is intentionally ordered before the GSAP tags in the HTML).
  pruneExpired();    // drop any show whose date has passed, before reveals bind
  renderCountdown(); // show a live countdown immediately, before JSON resolves
  initMenu();
  initVideos();
  initI18n();

  // Reveals need GSAP. The deferred GSAP scripts execute before DOMContentLoaded, so by then
  // window.gsap is ready (or has permanently failed). `load` is a belt-and-suspenders retry;
  // initReveals is idempotent. All [data-reveal] elements sit below the 100svh hero, so
  // deferring their setup to DOMContentLoaded produces no visible flash.
  document.addEventListener("DOMContentLoaded", initReveals);
  window.addEventListener("load", initReveals);
})();

