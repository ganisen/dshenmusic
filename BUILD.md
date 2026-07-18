# BUILD.md — production build handoff (dshenmusic.com)

> **✅ STATUS 2026-07-18: this build is COMPLETE.** The production site exists on branch
> `build/production-site`. This file is kept as the **historical build brief** (how the
> site was built). For the **current state, decisions log, and next steps, read
> [`HANDOFF.md`](HANDOFF.md).** Do not rebuild from this doc.

**Original brief (historical).** The design is finalized; this was the authoritative brief
for building the production site. Nothing here needed re-deriving — read the referenced docs
and build.

**Read order:** this file → `design_handoff_dshen_site/README.md` (exact per-section spec:
px, gradients, copy) → `DESIGN.md` (intent + tokens) → `CONTENT.md` (copy, links, assets).
`CLAUDE.md` governs the non-negotiable stack rules.

---

## Goal

An **EN-complete, launch-ready** single page recreating the finalized design, with the
**i18n scaffold** in place so RU/RO/UA slot in as JSON later (zero code changes). Presave is
the hero CTA. Album «Там и тогда» out **2026-07-24**.

## Stack / constraints (from CLAUDE.md — do NOT deviate)

- **Vanilla HTML + CSS + JS.** No framework, no bundler, no npm build.
- **GSAP + ScrollTrigger** from cdnjs only. No other third-party JS except YouTube embeds.
- Static site, output dir `/`. **Every push to `main` auto-deploys to production** (Cloudflare
  Pages). **Build on a branch**, review the auto-generated `*.dshenmusic.pages.dev` preview,
  merge to `main` only once the owner approves.
- **Mobile-first** (test 375px first). Perf budget **< 1.5 MB** initial, **Lighthouse 90+**,
  no layout shift on hero.
- Honor **`prefers-reduced-motion`** (every GSAP animation needs a disabled path). Alt text on
  all images. Sufficient contrast.

## Files to create

```
index.html      semantic markup: fixed header + mobile menu + 6 sections
style.css       tokens (CSS vars) + layout + type; @font-face already specified
main.js         GSAP reveals, hero Ken Burns, countdown, video facade, mobile menu,
                language switcher, i18n loader
i18n/en.json    extracted EN copy (create ru/ro/ua later; fall back to en until then)
```

Keep root clean: only the above + existing `.md` docs + `assets/`.

---

## The two gotchas — RESOLVED, honor these

### 1. Concert-photo path — FIXED
Canonical folder is **`assets/unplugged-2026-07-11/`** (dated), NOT `assets/unplugged/`.
The prototype HTML has been patched to the correct path and all 12 asset refs verified to
resolve. Use the dated folder everywhere.

### 2. Responsive images — use `srcset` (prototype used single fixed files)
The prototype dropped `srcset` due to a preview-env quirk. **Production must use `srcset`.**
**WebP-only is fine** — universal browser support in 2026, no JPEG fallback needed. Hero is
eager + preloaded; everything below the fold is `loading="lazy"`. Map of sizes that exist:

| Image (in `assets/`) | Role | `srcset` widths present | suggested `sizes` |
|---|---|---|---|
| `unplugged-2026-07-11/DSC09567-{800,1600,2400}.webp` | hero, full-viewport | 800·1600·2400 | `100vw` (eager + preload) |
| `tam_i_togda/tam-i-togda-1x1-{400,800,1200,1600}.webp` | album cover (Music) | 400·800·1200·1600 | `(min-width:760px) 520px, 90vw` |
| `korabli/korabli-1x1-{400,800,1200}.webp` | single card | 400·800·1200 | `(min-width:760px) 340px, 45vw` |
| `neaktrisa/neaktrisa-1x1-{400,800,1200}.webp` | single card | 400·800·1200 | `(min-width:760px) 340px, 45vw` |
| `unplugged-2026-07-11/DSC09439-{800,1600}.webp` | About portrait (3:4) | 800·1600 | `(min-width:760px) 520px, 90vw` |
| `unplugged-2026-07-11/DSC09446-{800,1600,2400}.webp` | Live top (16:8) | 800·1600·2400 | `(min-width:1100px) 1100px, 92vw` |
| `unplugged-2026-07-11/DSC09476-{800,1600}.webp` | Live half (3:4) | 800·1600 | `(min-width:760px) 46vw, 100vw` |
| `unplugged-2026-07-11/DSC09505-{800,1600}.webp` | Live half (3:4) | 800·1600 | `(min-width:760px) 46vw, 100vw` |

Video thumbnails: prototype uses `https://img.youtube.com/vi/{id}/hqdefault.jpg` (a
third-party GET on load). **Recommended:** download the 2 thumbnails (`mFEPXxBuKIc`,
`57JVbhlsunk`) into `assets/video/` and serve locally — consistent with self-hosting fonts,
avoids a third-party request. (Not blocking; owner's call.)

---

## Sections (build from `design_handoff_dshen_site/README.md` §"Screens / Sections")

That README has the exact pixels/gradients/copy. Quick map (top → bottom):

1. **Header (fixed)** — logo `assets/logo/dshen-logo-white-800.png` (26px) left; nav
   MUSIC/VIDEO/ABOUT/LIVE/CONTACT + `EN RU RO UA` switcher right (≥720px); hamburger →
   full-screen overlay (<720px).
2. **Hero `#top`** — Concept A portrait (`DSC09567`), scrim, wordmark → H1 `Debut album
   «Там и тогда»` → countdown chip → `PRESAVE THE ALBUM` → band.link. Ken Burns zoom.
3. **Music `#music`** — album block (cover + meta + countdown chip + PRESAVE + streaming
   text) + **Released singles** cards (Корабли, Неактриса → their official-audio YouTube).
   **No track list.**
4. **Video `#video`** — 2 facade embeds: `Meet D'Shen` (mFEPXxBuKIc) + `«Корабли» — teaser`
   (57JVbhlsunk). `youtube-nocookie` iframe on click.
5. **About `#about`** — portrait `DSC09439` (3:4) + H2 `Songs as small plays` + bio
   (EN draft in CONTENT.md; **artist to confirm**).
6. **Live `#live`** — `FOLLOW @rogozinskaya.darina FOR ANNOUNCEMENTS` + UNPLUGGED photo grid
   (`DSC09446` top, `DSC09476` + `DSC09505` below).
7. **Contact/footer `#contact`** — email (Caveat mailto) + 5 social icons (Spotify/Apple/
   YouTube/Deezer/Instagram; **no Yandex icon** — SVG paths are inline in the prototype's
   `socials` array) + `© D'Shen 2026`.

## Tokens & type (canonical: DESIGN.md → Color / Typography)

- `--bg:#0d0b0a` · `--text:#f2ede6` · `--accent:#E5A455` + the opacity ladder + selection.
- Fonts already generated & self-hosted: `assets/fonts/caveat-var.woff2` (display, 400–700),
  `assets/fonts/oswald-var.woff2` (UI, 200–700). `@font-face` + preload snippet in DESIGN.md
  → Typography → Delivery. Roles: Caveat = hero/H2/single+video titles/mobile menu/contact
  email; Oswald = everything else. Full type scale in the handoff README §"Type scale".
- No border-radius except 50% circles (play button, social icons).

## Interactions (main.js)

- **Reveals:** replace the prototype's IntersectionObserver with **GSAP ScrollTrigger** —
  `[data-reveal]` → fade + 24px rise, .8s `cubic-bezier(.22,.61,.36,1)`, stagger via
  `data-reveal-order × .1s`, one-shot. **Skip entirely under `prefers-reduced-motion`.**
- **Hero Ken Burns:** scale 1.02→1.1 / 26s / infinite alternate; off under reduced-motion.
- **Countdown:** `Math.max(0, Math.ceil((Date('2026-07-24T00:00') - now)/86400000))` →
  chip text `OUT JULY 24 — IN {N} DAYS` / `IN 1 DAY` / `OUT NOW` at 0. No ticking.
- **Video facade:** thumbnail + play button → swap to
  `https://www.youtube-nocookie.com/embed/{id}?autoplay=1&rel=0`. No YouTube JS until click.
- **Mobile menu:** single breakpoint **720px**; overlay `rgba(13,11,10,.97)`, links Caveat
  2.6rem, closes on link click / ✕.
- **Smooth anchor scroll**, all external links `target="_blank" rel="noopener"`, hero CTA pulse.

## i18n plan (CLAUDE.md → Internationalization)

- `data-i18n` attributes + `i18n/en.json` (extract all EN strings from the design). Build
  `ru.json`/`ro.json`/`ua.json` later — **until they exist, fall back to `en`** so the site
  works. Default EN. Persist choice in a JS var + URL hash/param (NOT localStorage-dependent
  for core function). Set `document.documentElement.lang` on switch. Wire the header switcher.
- **Song/album titles stay Russian in every locale** («Там и тогда», «Корабли», «Неактриса»).
- Priority order EN / RU / RO / UA.

## Accessibility + perf checklist (before merge)

- [ ] 375px mobile pass (hero face visible, tap targets ≥44px, no horizontal scroll)
- [ ] `prefers-reduced-motion`: animations disabled, content fully visible
- [ ] Alt text on every image; nav/menu keyboard-operable; visible focus
- [ ] Hero image eager + `<link rel=preload>`; below-fold `loading="lazy"`; `srcset` everywhere
- [ ] Lighthouse ≥90 perf, no CLS on hero; total initial < 1.5 MB
- [ ] All links resolve; presave → band.link; socials → correct URLs (CONTENT.md)

## Blocked on people — do NOT block an EN launch

- **RU / RO / UA translations** — RU owner · UA artist (native) · **RO must be checked by
  local friends** (owner+artist are A0). Ship RO only after review.
- **Artist sign-off on the About bio draft.**
- Optional: artist glance at the Caveat rendering of «Там и тогда» (handwriting Cyrillic
  reads slightly Latin-ish — т≈m, и≈u; fine for RU/UA eyes, just confirm).

## Suggested build order

1. `index.html` structure + `style.css` tokens/layout/type — get the static look matching the
   6 screenshots (EN hardcoded is fine for pass 1).
2. Fonts + hero (scrim, object-position, preload) — compare against `screenshots/01`.
3. `main.js` — reveals, Ken Burns, countdown, video facade, mobile menu.
4. i18n — extract `en.json`, add `data-i18n`, wire switcher (ru/ro/ua → en fallback).
5. Branch → push → review Cloudflare preview with owner → merge to `main`.

## Asset inventory (all present under `assets/`)

Fonts (woff2 + OFL), `logo/` (white/black PNG 800/1600), `tam_i_togda/` (all crops + OG jpg),
`korabli/` + `neaktrisa/` (1x1 + 9x16), `unplugged-2026-07-11/` (15 photos @800/1600, +2400 on
DSC09567/09398/09446) + `PHOTOS.md`. Masters are in gitignored `assets/src/` — never deployed.
