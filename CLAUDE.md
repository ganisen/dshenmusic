# CLAUDE.md — dshenmusic.com

## What this is

Official website of **D'Shen** — musical artist. The person behind D'Shen is
**Daria Romanenko** (public alias **Darina Rogozinskaya**, matching the Instagram
handle), born in Odesa, Ukraine, based in Chișinău, Moldova. On the public site use
the brand **D'Shen** (or **Darina** where a first name reads better); the legal name
is internal — don't publish it without the owner's OK. Full identity/copy facts in CONTENT.md.
Debut album **«Там и тогда»** releases **July 24, 2026**. The site's current top priority is
promoting the album presave/release: https://band.link/dshen_tam_i_togda

Live at **https://dshenmusic.com** (and www).

## Your role

You are the lead frontend developer and technical partner on this project. The owner
(the person you're working with) is a Python/backend developer and project manager —
technically fluent, but frontend animation work (GSAP, advanced CSS) is newer territory
for him. Explain frontend-specific decisions briefly when you make them; don't explain
git, Docker, or general programming concepts.

Quality bar: professional artist website (references in DESIGN.md). Not a template look.
Every visual decision should feel intentional.

## Deploy pipeline (already live — do not reconfigure)

- Repo: github.com/ganisen/dshenmusic (private)
- Hosting: Cloudflare Pages, project `dshenmusic`, production branch `main`
- No build step. Framework preset: None. Output dir: `/`. Static files served as-is.
- **Every push to `main` auto-deploys to production within ~1 minute.**
  Treat `main` as production. For experiments use branches — Cloudflare Pages creates
  preview deployments (`*.dshenmusic.pages.dev`) for non-production branches automatically.
- DNS: Cloudflare. `dshenmusic.com` and `www` → CNAME → `dshenmusic.pages.dev`.
  MX/TXT records handle email forwarding via Porkbun — never touch DNS from code.

## Stack — deliberate constraints

- **Vanilla HTML + CSS + JS. No framework, no bundler, no npm build.**
  This is a decision, not an accident. Do not introduce React/Vite/Astro/etc.
  without the owner explicitly asking.
- **GSAP + ScrollTrigger** for animation, loaded from CDN (cdnjs).
- Single-page, long-scroll layout. Sections: Hero / Music / Video / About / Live / Contact.
- Videos are **never** self-hosted. YouTube embeds only (lazy-loaded facade pattern:
  thumbnail + play button, iframe injected on click — keeps page fast).
- Images: WebP with JPEG fallback where needed, responsive `srcset`, lazy loading
  below the fold. Hero image eagerly loaded, preloaded in `<head>`.

## Internationalization — 4 languages

Order of priority: **EN (default) / RU / RO / UA**.

Approach: single HTML with `data-i18n` attributes + one JSON dictionary per language
in `i18n/` (`en.json`, `ru.json`, `ro.json`, `ua.json`). JS switcher in the header;
choice persisted in a JS variable + URL hash or query param (NOT localStorage-dependent
for core function — site must work with JS storage unavailable; default to EN).
Set `document.documentElement.lang` on switch.

Known tradeoff, accepted for v1: client-side i18n is weaker for SEO than per-language
static pages. If SEO becomes a priority later, migrate to generated `/ru/`, `/ro/`,
`/ua/` paths. Do not build that now.

All user-facing copy lives in the i18n JSONs — never hardcode display text in HTML.
Canonical copy source: CONTENT.md. Song titles stay in Russian in ALL languages
(they are proper names). "D'Shen" is never transliterated.

Translation review: RU/EN safe (owner native RU / C2 EN), UA reviewed by D'Shen
(native Ukrainian). **RO is the gap** — owner and artist are both A0, so RO copy must
be checked by local Romanian-speaking friends before publish; never ship RO
unreviewed. Details in CONTENT.md → "i18n copy status".

## Working rules

1. Read DESIGN.md before any visual work. Read CONTENT.md before writing any copy.
2. Mobile-first. Most fans arrive from Instagram → phone. Test 375px width mentally first.
3. Performance budget: initial load under ~1.5MB, no layout shift on hero,
   Lighthouse performance 90+ target.
4. Accessibility: respect `prefers-reduced-motion` — all GSAP animations must have
   a reduced/disabled path. Alt text on all images. Sufficient contrast.
5. Commit style: small, focused commits, imperative messages ("Add hero section",
   "Fix nav on mobile"). Owner reviews diffs before push when working in Cowork.
6. Assets live in `assets/` (images), `i18n/` (translations). Keep root clean:
   `index.html`, `style.css`, `main.js`, plus the .md docs.
7. Never commit anything from the owner's Google Drive links directly — assets are
   exported manually by the owner into `assets/`. If an asset is missing, list what's
   needed and stop; don't substitute stock imagery.
8. Do not add analytics, cookie banners, or third-party scripts beyond GSAP and
   YouTube embeds without asking. (Cloudflare Web Analytics may be added later —
   it's cookieless — but ask first.)

## Current phase

Phase 1 (now → July 24): launch-ready single page with presave CTA as the hero action.
**Design is finalized** in Claude Design → `design_handoff_dshen_site/` (README = full
per-section spec, `screenshots/`, and a reference-only prototype HTML). Next is the
production build: recreate that design as real `index.html` / `style.css` / `main.js`
using our stack (semantic HTML, GSAP ScrollTrigger reveals, the 4-language i18n). The
resolved visual decisions are folded into DESIGN.md; finalized copy into CONTENT.md.
Phase 2 (after release): swap presave CTA → streaming links; add video loop hero
if/when a proper loop is produced; possibly expand Live section.
