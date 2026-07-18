# HANDOFF.md — current state & next steps (dshenmusic.com)

**For the next session.** The production site is built and multilingual. This is the
authoritative snapshot of where things stand, what was decided, and what's left. Read
`CLAUDE.md` first for the non-negotiable rules; this file is the live status.

_Last updated: 2026-07-18._

---

## TL;DR

- The **production single-page site is built** — `index.html` / `style.css` / `main.js`,
  recreating the finalized design. `BUILD.md` (the original build brief) is **done**.
- **All four languages are drafted** in `i18n/`: **EN is final/live**; **RU / RO / UA are
  first drafts** pending sign-off.
- Everything lives on branch **`build/production-site`**, pushed. Cloudflare preview:
  **https://build-production-site.dshenmusic.pages.dev**
- **NOT merged to `main`.** `main` is production and auto-deploys. Merge only after owner
  review + the translation sign-offs below.
- Album **«Там и тогда» / “There and Then”** releases **2026-07-24**. Presave is the hero
  CTA sitewide until then: `https://band.link/dshen_tam_i_togda`.

## What's done ✅

- **Titles translated per language** (reversing the old "keep Russian" rule) with each
  language's **native quotation marks**:
  - EN curly `“There and Then”` / `“Ships”` / `“NonActress”`
  - RU/UA guillemets `«…»` (RU keeps the original Russian titles)
  - RO low-high `„…"`
- **The "non-actress" single title is stylized camelCase in every language:**
  `NonActress` / `«НеАктриса»` / `„NeActriță"` / `«НеАкторка»`.
- **Single cards link to band.link hubs** — Корабли → `band.link/dshenkorabli`,
  Неактриса → `band.link/dshen_neaktrisa` (were direct YouTube audio links).
- **Video grid** (facade/lazy YouTube):
  - v1 `mFEPXxBuKIc` — “In the darkest times — on “Ships”” · Behind the song · **0:45** (talking-head, confirmed)
  - v2 `57JVbhlsunk` — ““Ships” — snippet” · Teaser · **0:27** (snippet, confirmed)
- **Footer social icons** are the **official Simple Icons** marks (Spotify, Apple Music,
  YouTube, Deezer=current 2023 heart, Instagram) — monochrome via `fill="currentColor"`,
  brand-audited as correct + current; nominative footer/profile-link use is compliant.
- **Countdown grammar is correct in every language** — `main.js` picks `countdown.days_<cat>`
  via `Intl.PluralRules`; the Slavic/Romanian plural forms (`days_few`, RU/UA `days_many`,
  RO `de zile` for ≥20) are in the JSON. Verified for n=1..22.
- **Typography finalized to a single font — Oswald** across the whole site (was the
  two-font Caveat + Oswald system). Lora is kept dormant for a one-line switch-back; see the
  decisions log below and `DESIGN.md → Typography`.

## What's left ⛔ (before this can go to production)

Nothing here is native-verified — these are people-gates, per `CONTENT.md`:

| Owner | Needs to |
|-------|----------|
| **Native Romanian speaker(s)** | Review **all of `ro.json`** — hard gate. Owner + artist are A0; the whole file is placeholder-quality until checked. Watch the coined `„NeActriță"` and the title renderings (`„Acolo și atunci"`, `„Corăbii"`). |
| **D'Shen (native UA)** | Sign off `ua.json`: confirm the coined `«НеАкторка»`, `label.about` (“Про мене” vs “Про D'Shen”), `label.live` (“Наживо” vs “Виступи”), and the bio wording. |
| **Artist** | Confirm the **About bio** (all languages) — still a draft per CONTENT.md. |
| **Owner** | Minor: RU streaming line `«Яндекс Музыка»` vs Latin “Yandex Music”. |

Reviewer confidence (second-pass, NOT native): **RU ~80% · UA ~85% · RO ~72%**.

## How to work with it

**View locally** (the i18n loads via `fetch`, so `file://` won't work — needs a server):
```
python3 -m http.server 8000    # then open http://localhost:8000  (Ctrl-C to stop)
```
Click EN/RU/RO/UA in the header to switch. Language persists via `?lang=` + localStorage.

**Preview (shared):** push the branch → Cloudflare rebuilds
`build-production-site.dshenmusic.pages.dev` (~1 min).

**Ship to production:** merge `build/production-site` → `main` (opens auto-deploy to
`dshenmusic.com`). Do this **only** after owner approval + RO/UA/bio sign-offs.

## i18n cheat-sheet (for editing copy)

- All display text is in `i18n/<lang>.json`; **never hardcode copy in HTML**. Keys are
  referenced via `data-i18n` / `data-i18n-attr` / `data-i18n-var` in `index.html`.
- `main.js` merges `{...en, ...lang}` — a locale file may be partial; missing keys fall
  back to EN. Keep all four in sync when adding a key.
- **Native quotes per language** when wrapping work titles: EN `“ ”`, RU/UA `« »`, RO `„ "`.
- **Countdown plurals:** RU/UA need `days_one/few/many` (+`days_other` fallback), RO needs
  `days_one/few/other` (few = "zile", other = "de zile"). EN only `one/other`.
- Never translate/transliterate **D'Shen**, the email, the `@rogozinskaya.darina` handle,
  brand names, or the `{n}` / `{title}` placeholders.
- Ukrainian file is **`ua.json`** (the site uses `ua`, mapped to `uk` only for
  `<html lang>` / plural rules).

## Decisions log

- **2026-07-18 (typography)** — Settled on a **single-font system: Oswald** everywhere
  (hero, titles, nav, UI, body). The original build ran two fonts (Caveat display + Oswald);
  the handwriting face was first swapped `Caveat → Lora` (serif), then the owner chose to
  drop the separate display font for one cohesive gig-poster grotesque. Caveat removed from
  the build; **Lora kept dormant** in the repo (`@font-face` + `lora-var.woff2`, no preload)
  so a serif display font is a one-line restore (`--font-display:"Lora", Georgia, serif`).
  `<head>` now preloads Oswald (previously the display font was the only preload). Details in
  `DESIGN.md → Typography`.
- **2026-07-18** — Song/album titles are **translated per language** (was: keep Russian
  everywhere). Native quote glyphs per language. The "non-actress" title is stylized
  **camelCase in all langs**. `«Часы»` → “The Clock” (clock sense). Single stays “NonActress”.
  Singles link to **band.link** hubs. Videos retitled; runtimes 0:45 / 0:27 confirmed.
  Presave wording per language approved. Footer icons → official Simple Icons.
- Engineering invariants still true: `img{height:auto}` is required (else the CLS
  width/height attrs pin box height and CSS `aspect-ratio` is ignored); `main.js` loads
  **before** the GSAP `<script>`s so menu/video/i18n aren't blocked if the GSAP CDN is slow.

## Next steps (suggested order)

1. Get **`ro.json` reviewed by a native Romanian speaker**; apply fixes.
2. **D'Shen** reviews `ua.json` + confirms the bio (all langs).
3. Owner reviews the preview in all four languages; resolve the minor open calls.
4. **Merge `build/production-site` → `main`** (or open a PR) → production deploy.
5. **Phase 2 (post-release, after 2026-07-24):** swap presave CTA → streaming links;
   add a video-loop hero if a proper loop is produced; possibly expand the Live section.
