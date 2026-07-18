# CONTENT.md — canonical content & data for dshenmusic.com

Single source of truth for all copy, links, and asset requirements.
All display text ultimately lives in `i18n/*.json`; this file is where it's decided.

## Artist

- Artist name: **D'Shen** (never transliterated, never restyled)
- Person: **Daria Romanenko** — singer, theater actress. Public alias / persona name:
  **Darina Rogozinskaya** (matches the Instagram handle `rogozinskaya.darina`).
  → On the site, the brand is **D'Shen**; where a human first name reads better, use
  **Darina**. Do NOT publish the legal name "Daria Romanenko" on the public site
  without the owner's explicit OK — treat it as internal reference here.
- Born: **Odesa, Ukraine** (native language Ukrainian) · Based: **Chișinău, Moldova**
- Languages of the site: EN (default), RU, RO, UA

## Album — «Там и тогда»

- Release date: **July 24, 2026** — already delivered to stores
- Presave (Spotify / Apple Music / Yandex Music): **https://band.link/dshen_tam_i_togda**
- Until July 24: presave is THE primary CTA sitewide.
  From July 24: swap CTA to streaming links (band.link may still serve as the hub —
  owner to confirm post-release).

### Tracklist (Russian originals below are canonical; per **owner decision 2026-07-18** the site now shows titles TRANSLATED per language — drafts live in `i18n/`)

| # | Title      | Length | ISRC          |
|---|------------|--------|---------------|
| 1 | Там и тогда | 04:11 | QT6672616235 |
| 2 | Память      | 03:18 | QT6672616236 |
| 3 | Часы        | 03:22 | QT6672616237 |
| 4 | Неактриса   | 03:03 | QT6662667261 |
| 5 | Данте       | 03:51 | QT6672616238 |
| 6 | Корабли     | 04:18 | QT6662600623 |
| 7 | Мой город   | 03:45 | QT6672616240 |
| 8 | За мечтой   | 03:30 | QT6672616241 |

ISRCs are internal reference — do not display on site.

**Localized track titles** (per the 2026-07-18 translate-titles decision; RU = original, EN
live on site, **RO/UA are drafts — need native review**; only #4/#6 currently appear on the
site as singles). On-site, each language wraps titles in its **native quotes**: EN “ ”,
RU/UA « », RO „ ".

| # | RU (orig) | EN | RO (draft) | UA (draft) | Note |
|---|-----------|----|-----------|-----------|------|
| 1 | Там и тогда | There and Then | Acolo și atunci | Там і тоді | title track |
| 2 | Память | Memory | Amintirea | Пам'ять | RO: Amintirea (recollection) vs Memoria (faculty) |
| 3 | Часы | The Clock | Ceasul | Годинник | clock sense confirmed (owner 2026-07-18) |
| 4 | Неактриса → site «НеАктриса» | NonActress | NeActriță | НеАкторка | owner chose the camelCase stylization in EVERY language incl. RU (2026-07-18); RO still needs a native pass |
| 5 | Данте | Dante | Dante | Данте | proper name (poet) — keep, don't translate |
| 6 | Корабли | Ships | Corăbii | Кораблі | RO Corăbii (poetic) vs Nave (plain) |
| 7 | Мой город | My City | Orașul meu | Моє місто | — |
| 8 | За мечтой | Chasing a Dream | După vis | За мрією | "After the Dream" is a more literal alt |

**The site does NOT show a track list** (cut in Claude Design). This table stays as
canonical reference data (order, durations, ISRCs) — the Music section shows only the
album block + the two released singles.

### Released singles

- **«Корабли»** (EN «Ships», track 6) — released June 26, 2026. Cover art: `assets/korabli/`.
  - **Site "Listen ↗" card → band.link hub: https://band.link/dshenkorabli** (as of 2026-07-18)
  - Official audio (distributed via TuneCore): https://www.youtube.com/watch?v=b4fyT2Es-sM
  - Teaser snippet (27 s): https://youtu.be/57JVbhlsunk
- **«Неактриса»** (EN «NonActress», track 4) — released July 10, 2026. Cover art: `assets/neaktrisa/`.
  - **Site "Listen ↗" card → band.link hub: https://band.link/dshen_neaktrisa** (as of 2026-07-18)
  - Official audio (distributed via TuneCore): https://www.youtube.com/watch?v=X57QnzJtcUk
  - Release metadata: ISRC `QT6662667261` · UPC `859741394974` · Label D'Shen ·
    Language Russian · Genre Rock / Alternative.

## Official links

- Spotify: https://open.spotify.com/artist/1Gr5VQ2UXkaIadQ9p9vkc1
- Apple Music: https://music.apple.com/us/artist/dshen/6778941448
- YouTube: https://www.youtube.com/channel/UCpyidY4sL6-NJ1Xt1ezpG2A (@dshenmusic)
- Deezer: https://www.deezer.com/en/artist/396177361
- Instagram: https://www.instagram.com/rogozinskaya.darina/
- Contact email: **contact@dshenmusic.com** (Porkbun forwarding — live; show on site)
- Footer social icon row = these 5 (Spotify · Apple Music · YouTube · Deezer · Instagram),
  44px circles. **Yandex Music has no footer icon** — it appears only as text in the Music
  section's streaming line.

## Video section

Facade/lazy embeds only (`youtube-nocookie` iframe injected on click). **Final selection —
2 videos in the grid:**

| # | Title | YouTube ID | Meta |
|---|-------|------------|------|
| 1 | In the darkest times — on “Ships” (RU title: «В самые трудные времена \| О «Кораблях»») | `mFEPXxBuKIc` | Behind the song · 0:45 (talking-head — confirmed 2026-07-18) |
| 2 | “Ships” — snippet | `57JVbhlsunk` | Teaser · 0:27 (snippet — confirmed) |

The two **official-audio** videos are the audio masters (reference). As of 2026-07-18 the
released-singles cards in Music link to the **band.link hubs** (see Released singles above),
NOT directly to these YouTube URLs:
- «Корабли» / «Ships» official audio: https://www.youtube.com/watch?v=b4fyT2Es-sM
- «Неактриса» / «NonActress» official audio: https://www.youtube.com/watch?v=X57QnzJtcUk

## About — bio

Section heading (Caveat): **Songs as small plays**.

EN bio — **draft from the design (artist to confirm before publish):**

> Darina came to music the way an actress comes to a role — completely. Born in Odesa and
> trained for the theater, now singing from Chișinău, she writes songs in Russian that
> unfold like small plays: a scene, a confession, a curtain. D'Shen is her stage — a place
> where the romance tradition and Silver Age poetry meet a modern, intimate voice. Her
> debut album «Там и тогда» collects eight of these scenes — about memory, cities, ships
> and dreams — sung with the sincerity of someone who has stood in front of an audience
> and decided to tell the truth.

~100 words. Uses **Darina** (public alias), not the legal name. Fact base: born Odesa,
based Chișinău, trained theatre actress. RU/RO/UA produced from this per the i18n reviewer
rules below.

## Live

- No announced upcoming dates → a single line (no "no shows" heading):
  `FOLLOW @rogozinskaya.darina FOR ANNOUNCEMENTS` (handle in accent → Instagram).
- Past moment: `UNPLUGGED — the debut` · `11 July 2026 · Chișinău` (acoustic set) +
  a photo grid: full-width 16:8 `DSC09446` on top, two 3:4 halves below (`DSC09476`,
  `DSC09505`). A credibility moment, not a listing. Full catalog:
  `assets/unplugged-2026-07-11/PHOTOS.md`.

## Assets — originals in `assets/src/` (gitignored), web versions committed

Drive folder is on a separate Google account — agents cannot access it. Owner delivers
full-res masters; those live in **`assets/src/`, which is gitignored** (~244 MB, several
files >10 MB — never committed to git). Only the web-optimized derivatives below are
tracked (~5 MB total, largest 344 KB), generated with ImageMagick at quality 80.

| Asset | Original (in `assets/src/`, local only) | Committed web versions (in `assets/…`) |
|-------|------------------------------------------|-----------------------------------------|
| Album «Там и тогда» | `tam_i_togda/` (7 crops + `-original` + YT banner) | `tam_i_togda/tam-i-togda-<ratio>-<w>.webp` for **every** ratio — 1x1 {400,800,1200,1600}, 3x2·16x9·4x3 {800,1600}, 2x3·3x4 {800,1200}, 9x16 {800,1080}; plus `tam-i-togda-og.jpg` (1200w, social/OG) |
| Single «Корабли» | `korabli/` (1:1 + 9:16) | `korabli/korabli-1x1-{400,800,1200}.webp`, `korabli-9x16-{800,1080}.webp` |
| Single «Неактриса» | `neaktrisa/` (1:1 + 9:16) | `neaktrisa/neaktrisa-1x1-{400,800,1200}.webp`, `neaktrisa-9x16-{800,1080}.webp` |
| UNPLUGGED photos (15) | `unplugged-2026-07-11/DSC*.jpg` | `unplugged-2026-07-11/DSC<n>-{800,1600}.webp` (all 15) + `-2400.webp` for the 3 hero picks (DSC09567 / 09398 / 09446); plus `PHOTOS.md` |
| Logo / wordmark | `dshen-logo/` (`.ai`, `.eps`, full-res `.png`, black+white) | `logo/dshen-logo-{black,white}-{800,1600}.png` |
| Fonts | src masters `fonts/caveat/` + `fonts/oswald/` (OFL); `fonts/ambition-ink/` artwork-only | `fonts/caveat-var.woff2` (display) + `fonts/oswald-var.woff2` (UI) + `OFL-*.txt` — subset variable woff2, all 4 langs ✓ |

Total committed web assets ≈ **7 MB** (largest single file 452 KB). The two live fonts are
committed as subset variable `woff2` in `assets/fonts/` (**Caveat** display ~164 KB,
**Oswald** UI ~50 KB) — see DESIGN.md → Typography for the `@font-face`. Src-only (never
deployed): the album `-original.png` + `-youtube-banner.png`, all font masters
(`assets/src/fonts/`), and **Ambition & Ink** (reference-only — baked into produced
artwork: covers/posters/Figma — never a webfont).

Regenerate from originals with ImageMagick, e.g.
`magick assets/src/<rel>/<file>.png -resize 800x -quality 80 assets/<rel>/<name>-800.webp`
(covers/photos → WebP q80; the OG image is JPG q82 for scraper compatibility; logos stay
PNG to keep transparency).

Naming: lowercase, hyphens, `-<width>` suffix; concert photos keep their `DSC` stem so
they map 1:1 to `PHOTOS.md`.

> ⚠️ Source typo: the album 3:2 master is misspelled `tam_i_tgoda-3_2.png` ("tgoda") in
> `assets/src/`. The web output is correctly named `tam-i-togda-3x2-*.webp`; rename the
> source in Drive whenever convenient.

## i18n copy status

All four languages are now drafted in `i18n/` (`en.json` · `ru.json` · `ro.json` ·
`ua.json`) — every section. EN is final/live; RU/RO/UA are first drafts pending sign-off:

| Lang | State | 2nd-pass confidence | Gate before publish |
|------|-------|---------------------|---------------------|
| EN   | ✅ final, live on site | — | About bio still needs artist OK |
| RU   | 📝 draft, in JSON | ~80% | strong; owner (native) confirms wording |
| RO   | ⚠️ draft, in JSON | ~72% | **must be native-checked — owner + artist A0** |
| UA   | 📝 draft, in JSON | ~85% | D'Shen (native) reviews; confirm «НеАкторка» + bio |

Confidence is a self-review second pass, **not** native verification. The About bio (all
langs) and the coined single title still need artist sign-off. Full per-language review
flags + current state: see `HANDOFF.md`.

**Translation review — who signs off on each language:**

- **RU** — owner (native) and D'Shen both fluent. Safe.
- **EN** — owner is C2. Safe to draft + self-review.
- **UA** — D'Shen is a **native Ukrainian speaker** → she reviews UA.
- **RO** — ⚠️ the gap. Owner and D'Shen are both **A0** in Romanian. RO copy MUST be
  checked by local Romanian-speaking friends before publish. **Never ship RO
  unreviewed** — machine/draft RO is a placeholder only.
