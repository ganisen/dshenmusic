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
Canonical copy source: CONTENT.md. Song and album titles ARE translated per language
(owner decision 2026-07-18 — this reverses the earlier "keep Russian everywhere" rule):
each locale shows titles in its own language, wrapped in that language's NATIVE quotation
marks — EN curly “ ” (e.g. “There and Then” / “Ships” / “NonActress”), RU/UA guillemets
« », RO low-high „ " (e.g. „Corăbii"). RU keeps the original Russian titles. The artist
name "D'Shen" is still never transliterated. Note: cover artwork keeps the Russian titles
baked in — that's the artwork, expected.

Translation review: RU/EN safe (owner native RU / C2 EN), UA reviewed by D'Shen
(native Ukrainian). **RO is the weak spot** — owner and artist are both A0. RO still
**ships with every release** (owner decision 2026-07-24, reaffirmed 2026-08-10): native
review by local Romanian-speaking friends is a continuous pass against the live site,
not a publish gate. Write RO to the best standard you can, ship it, and log open
wording questions in CONTENT.md → "i18n copy status" so a reviewer has a list to work
from. Never silently drop an RO string — a missing key falls back to English mid-page.

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
9. **Safety rule (2026-08-22, owner request — non-negotiable):** the public site carries
   **no reference to Russia, to the songs being in Russian, or to Russian platforms**
   (Yandex Music, VK, Zvuk). The four UI languages, RU included, stay. Never re-add such
   a link, icon, or copy line — not from CONTENT.md, not from the design mock, not from
   a distributor feed. See the 2026-08-22 entry in HANDOFF.md.
10. Internal docs are kept off the public site by `_redirects` (Pages serves the repo root
   as-is). **Add a rule to `_redirects` for every new internal `.md` file.**

## Current phase

Phase 1 is **shipped**. The album released 2026-07-24 and the site is live on `main` in
all four languages — hero and album CTAs point at the band.link hub, the release chips
auto-flip to "Out now". `build/production-site` is fully merged and can be deleted.
→ **Read `HANDOFF.md`** for the authoritative current state, decisions log, and next steps.
(`BUILD.md` is the historical brief for the original build — now complete. Design source
of truth stays `design_handoff_dshen_site/` + `DESIGN.md`; copy in `CONTENT.md`.)

Phase 2 (now): expand the Live section as material arrives — the UNPLUGGED aftermovie
landed 2026-08-10; add a video-loop hero if/when a proper loop is produced. Open review
debts (RO wording, D'Shen on the rest of `ua.json`) are tracked in `HANDOFF.md` and are
worked off against the live site, not held in front of it.
