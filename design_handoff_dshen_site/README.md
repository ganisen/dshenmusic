# Handoff: D'Shen — dshenmusic.com single-page artist site

## Overview
Official single-page website for **D'Shen** — female singer-songwriter from Chișinău. Theatrical, cinematic, sincere. Primary goal: drive presaves of the debut album **«Там и тогда»** (out July 24, 2026), then videos, about, live, contact.

## About the Design Files
`DShen Website.dc.html` in this bundle is a **design reference created in HTML** — a prototype showing intended look and behavior, **not production code to copy directly**. The target repo (dshenmusic.com) is a static vanilla HTML/CSS/JS site with GSAP and no build step — recreate this design there using its established patterns (semantic HTML, a real stylesheet, GSAP ScrollTrigger for reveals, the existing i18n setup). `mobile-preview.html` is just a 390px iframe wrapper for review — ignore it.

## Fidelity
**High-fidelity.** Colors, type, spacing, copy, and interactions are final unless noted. Recreate pixel-perfectly.

## Design Tokens
- `--bg`: `#0d0b0a` (near-black, warm)
- `--text`: `#f2ede6` (warm off-white)
- `--accent`: `#E5A455` (warm amber, from stage-light photography). Alternates explored and rejected: `#8FB3BA` teal, `#C99FA4` dusty rose.
- Text opacity steps (on `--text`): .85 body on photos, .82 nav, .75/.7 secondary, .55/.5 metadata, .45 muted, .4 copyright, .38 inactive language, hairlines `rgba(242,237,230,.14)` and `.09`
- Selection: bg `rgba(229,164,85,.85)`, text `#0d0b0a`
- Fonts (self-hosted variable woff2, in `assets/fonts/`):
  - **Caveat** (400–700) — display: hero H1, section H2s, single/video titles, mobile menu links, contact email
  - **Oswald** (200–700) — everything else: nav, labels, dates, buttons, body
- Font loading: `@font-face` with `font-display: swap`; preload Caveat.
- No border radius anywhere except: 50% circles (play button, social icons). Buttons and cards are square-cornered.
- Shadows (photos/covers): `0 44px 90px -18px rgba(0,0,0,.85)` (hero cover), `0 30px 70px -16px rgba(0,0,0,.75)` (section images), `0 18px 44px -12px rgba(0,0,0,.7)` (single cards)
- Section padding: `clamp(76px, 12vh, 128px)` top; horizontal `clamp(20px, 5vw, 56px)`; content max-width `1100px` (hero content `1200px`)

## Type scale
- Hero H1: Caveat 600, `clamp(2.7rem, 8.5vw, 5.6rem)`, line-height 1.02
- Section H2: Caveat 600, `clamp(2.8rem, 6vw, 4.4rem)` (music) / `clamp(2.5rem, 5.5vw, 3.8rem)` (about), line-height 1–1.05
- Section label ("MUSIC", "VIDEO"…): Oswald 500, 12px, letter-spacing .32em, uppercase, accent color, followed by a 1px hairline that flex-fills the row
- Nav links: Oswald 500, 12px, ls .22em, uppercase
- Meta lines (dates, subtitles): Oswald 400, 11–13px, ls .22–.3em, uppercase
- Body (about bio): Oswald 300, 1.05rem, line-height 1.8, ls .015em, max-width 56ch, `text-wrap: pretty`
- Buttons: Oswald 600, 13–14px, ls .22em, uppercase
- Minimum hit target on mobile: 44px (social icons are 44×44)

## Screens / Sections (top to bottom)

### Fixed header
- `position: fixed`, full-width, z-60. Background: fade-out gradient `rgba(13,11,10,.88) → .55 @60% → 0`. Padding `14px clamp(16px,4vw,44px)`.
- Left: logo `assets/logo/dshen-logo-white-800.png`, height 26px, links to `#top`.
- Right (≥720px): nav MUSIC / VIDEO / ABOUT / LIVE / CONTACT (anchor links, gap 30px), then language switcher `EN RU RO UA` (11px, ls .18em; active EN in accent, others `.38` opacity). Switcher is static chrome in the mock; wire to existing i18n.
- <720px: hamburger (three 2px bars, 22/22/14px wide, gap 5px) opens a full-screen overlay (`rgba(13,11,10,.97)`, z-70): nav links in Caveat 2.6rem stacked, language row below, ✕ top-right. Links close overlay on click.

### 1. Hero (`#top`)
- Full viewport: `min-height: 100svh`, flex, content aligned to bottom-left.
- Background photo `assets/unplugged-2026-07-11/DSC09567-2400.webp` (portrait 1600×2400): `object-fit: cover; object-position: 68% 38%` — keeps her face in the upper area, clear of the text. Slow Ken Burns zoom: scale 1.02→1.1 over 26s, ease-in-out, infinite alternate, `transform-origin: 68% 38%`. Disable under `prefers-reduced-motion`.
- Scrim: `linear-gradient(180deg, rgba(13,11,10,.5) 0%, transparent 28%, rgba(13,11,10,.15) 55%, rgba(13,11,10,.93) 100%)`.
- Content (entrance: fade + 24px rise, .15s delay, 1s cubic-bezier(.22,.61,.36,1)):
  - Wordmark image, height `clamp(42px, 7vw, 64px)`
  - H1: `Debut album «Там и тогда»`
  - Chip: `OUT JULY 24 — IN {N} DAYS` (live computed; after release: `OUT NOW`)
  - CTA button: `PRESAVE THE ALBUM` → `https://band.link/dshen_tam_i_togda` (new tab). Accent bg, `#0d0b0a` text, padding 16px 34px. Soft pulse: box-shadow ring 40%-accent expanding to 14px, 2.8s loop. Hover: lift 2px.
- (An alternate centered album-cover hero was built and rejected — portrait concept is final.)

### 2. Music (`#music`)
- Section label row: `MUSIC` + hairline.
- Two-column grid `repeat(auto-fit, minmax(280px, 1fr))`, gap `clamp(28px,5vw,64px)`, vertically centered; stacks on mobile:
  - Left: album cover `assets/tam_i_togda/tam-i-togda-1x1-1200.webp`, square, shadow.
  - Right (column, gap 14px): H2 `«Там и тогда»`; meta `DEBUT ALBUM · 8 TRACKS · JULY 24, 2026`; countdown chip (1px accent border, accent text, 8px 16px); `PRESAVE` button (same style, 14px 30px); muted line `SPOTIFY · APPLE MUSIC · YOUTUBE MUSIC` (12px, ls .14em, .45 opacity) — removed from the built site 2026-07-18.
- **No track list** (explicitly cut).
- Released singles: label `RELEASED SINGLES` (12px, ls .3em, .55), then grid `minmax(230px, 1fr)`, gap 20px. Card = cover image (square, shadow) + Caveat 1.9rem title + meta `SINGLE · {DATE} · LISTEN ↗` (accent on "Listen"). Whole card is a link, hover lifts 3px:
  - «Корабли» — June 26, 2026 → https://www.youtube.com/watch?v=b4fyT2Es-sM — `assets/korabli/korabli-1x1-800.webp`
  - «Неактриса» — July 10, 2026 → https://www.youtube.com/watch?v=X57QnzJtcUk — `assets/neaktrisa/neaktrisa-1x1-800.webp`

### 3. Video (`#video`)
- Grid `minmax(290px, 1fr)`, gap 24px. Two items:
  - "Meet D'Shen" — intro, 0:45 — YouTube `mFEPXxBuKIc`
  - "«Корабли» — teaser" — snippet, 0:27 — YouTube `57JVbhlsunk`
- Lazy facade pattern: 16:9 button with `https://img.youtube.com/vi/{id}/hqdefault.jpg` at .75 opacity + centered play circle (64px, `rgba(13,11,10,.62)` bg, 1px `rgba(242,237,230,.55)` border, off-white triangle). On click swap to `https://www.youtube-nocookie.com/embed/{id}?autoplay=1&rel=0` iframe. Caption: Caveat title + uppercase meta.

### 4. About (`#about`)
- Same two-column grid as Music. Left: `assets/unplugged-2026-07-11/DSC09439-1600.webp`, 3:4 crop, `object-position: 50% 20%`, shadow.
- Right: H2 `Songs as small plays` + bio paragraph (placeholder draft, ~100 words — Odesa-born, theater-trained, Chișinău-based; romance tradition + Silver Age poetry; songs as small plays; album framing). **Copy to be confirmed by artist.**

### 5. Live (`#live`)
- Label row `LIVE`.
- One line: `FOLLOW @rogozinskaya.darina FOR ANNOUNCEMENTS` (13px, ls .14em, uppercase; handle in accent, links to Instagram). No "no shows" empty-state heading.
- Past-show moment: heading row `UNPLUGGED — the debut` (Caveat clamp(1.9–2.6rem)) + `11 JULY 2026 · CHIȘINĂU`; photo grid: full-width 16:8 `DSC09446-1600.webp` on top, two 3:4 halves below (`DSC09476-800.webp`, `DSC09505-800.webp`), gap 14px.

### 6. Contact / footer (`#contact`)
- Centered. Label row `CONTACT`.
- Email `contact@dshenmusic.com` as mailto link, Caveat `clamp(1.9rem, 6vw, 3.4rem)`, accent on hover.
- Social icon row (gap 14px 28px): 44px circles, 1px `rgba(242,237,230,.22)` border, 18px brand SVG glyphs in currentColor at .8 opacity. Hover: accent border + icon, 2px lift. Links (all new-tab):
  - Spotify: https://open.spotify.com/artist/1Gr5VQ2UXkaIadQ9p9vkc1
  - Apple Music: https://music.apple.com/us/artist/dshen/6778941448
  - YouTube: https://www.youtube.com/channel/UCpyidY4sL6-NJ1Xt1ezpG2A
  - Deezer: https://www.deezer.com/en/artist/396177361
  - Instagram: https://www.instagram.com/rogozinskaya.darina/
  - Icon SVG paths are inline in the design file (search `socials` array). Use official brand SVGs where available. Russian platforms are not listed — see the 2026-08-22 safety scrub in HANDOFF.md.
- Copyright: `© D'SHEN 2026`, 11px, ls .2em, .4 opacity, above a `.09` hairline.

## Interactions & Behavior
- **Scroll reveals**: every `[data-reveal]` element starts `opacity 0, translateY(24px)`; on ~12% intersection (rootMargin `0 0 -8%`) transitions to visible over .8s `cubic-bezier(.22,.61,.36,1)`; siblings stagger via `data-reveal-order` × 0.1s. One-shot (unobserve after reveal). In the real site use GSAP ScrollTrigger. Skip entirely under `prefers-reduced-motion` and when IntersectionObserver is absent.
- Smooth anchor scrolling (`scroll-behavior: smooth`).
- Countdown: `ceil((2026-07-24T00:00 local − now) / 86400000)`, floor 0 → "OUT NOW". Renders server-less at load; no ticking needed.
- Video facades as above (no YouTube JS until click; `youtube-nocookie` embed).
- Hover states: nav/social/links → accent; buttons/cards → small translateY lift; hero CTA pulses.
- All external links `target="_blank" rel="noopener"`.

## State Management
Static site — only transient UI state: mobile-menu open/closed, per-video playing flag, reveal-observer bookkeeping. No fetching.

## Responsive
- Mobile-first; single breakpoint at **720px** for header (hamburger vs inline nav). Everything else is fluid: `clamp()` type/spacing and `auto-fit minmax` grids that stack naturally.
- Hero uses `100svh`; portrait photo crops center-right on narrow screens (face stays visible).

## Assets
All in the repo already (`assets/`): fonts (caveat-var.woff2, oswald-var.woff2 — OFL licenses included), logo PNG, album/single covers (webp), UNPLUGGED concert photos (webp, multiple sizes). Photo catalog: `assets/unplugged-2026-07-11/PHOTOS.md`.
**Note:** during prototyping, `srcset` was dropped in favor of single fixed files due to a preview-environment quirk. In production, DO use responsive `srcset` with the provided 800/1600/2400 sizes.

## i18n
Mock is EN-only. All copy must route through the site's 4-language i18n (EN/RU/RO/UA). Titles are translated per locale (owner decision 2026-07-18).

## Files
- `DShen Website.dc.html` — the full design (markup with inline styles + logic at the bottom of the file)
- `mobile-preview.html` — 390px review wrapper, not part of the design
- `screenshots/01–06-desktop.png` — desktop captures, top to bottom: hero, music, video, about, live, contact
- For mobile, open `mobile-preview.html` in a browser (or the design file in a 390px viewport) — mobile is the same fluid layout stacked, plus the hamburger/full-screen menu under 720px
