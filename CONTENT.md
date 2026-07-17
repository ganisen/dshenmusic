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

### Tracklist (titles are proper names — keep Russian in all languages)

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

### Released singles

- **«Корабли»** (track 6) — released June 26, 2026. Cover art: `assets/korabli/`.
  - Official audio (distributed via TuneCore): https://www.youtube.com/watch?v=b4fyT2Es-sM
  - Teaser snippet (27 s): https://youtu.be/57JVbhlsunk
- **«Неактриса»** (track 4) — released July 10, 2026. Cover art: `assets/neaktrisa/`.
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

## Video section

Facade/lazy embeds only (thumbnail + play button, iframe injected on click). Available:

| Video | URL | Notes |
|-------|-----|-------|
| «Неактриса» — official audio | https://www.youtube.com/watch?v=X57QnzJtcUk | 2nd single (TuneCore) |
| «Корабли» — official audio | https://www.youtube.com/watch?v=b4fyT2Es-sM | 1st single (TuneCore) |
| «Корабли» — teaser (27 s) | https://youtu.be/57JVbhlsunk | short snippet |
| Talking-head intro (45 s) | https://youtu.be/mFEPXxBuKIc | artist to camera |

Pick 2–4 for the grid; the two official-audio tracks are the anchors.
**[Owner to confirm final selection + ordering.]**

## About — bio

**[TBD: owner provides base bio text in RU or EN; translate to remaining languages
and review each — see i18n reviewer note below]**
Fact base for the bio: born in **Odesa, Ukraine**, based in **Chișinău, Moldova**;
trained **theater actress** and singer.
Angle to hit: theatrical background, sincerity, songs as small plays; keep under
~120 words per language.

## Live

- Currently no announced upcoming dates → show the graceful empty state
  ("Follow @rogozinskaya.darina for announcements").
- Past: debut concert July 11, 2026, Chișinău (an acoustic "UNPLUGGED" set) —
  usable as a photo/credibility moment, not a listing. Photos are in
  `assets/unplugged-2026-07-11/` — see `PHOTOS.md` there for a described catalog
  with hero/section picks (don't re-parse the images).

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
| Fonts | `fonts/ambition-ink/` (OTF+TTF, commercial), `fonts/oswald-cyrillic/` (TTF + `OFL.txt`) | *none yet* — subset `woff2` generated at build; Ambition & Ink gated on webfont licence. See DESIGN.md → Typography |

Total committed web assets ≈ **7 MB** (largest single file 452 KB). Src-only (never
deployed): the album `-original.png` + `-youtube-banner.png`, and **all font masters**
(`assets/src/fonts/`) — the latter deliberately, so the commercial Ambition & Ink OTF is
never served at a public URL before its licence is confirmed.

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

| Key set          | EN | RU | RO | UA |
|------------------|----|----|----|----|
| Nav + UI chrome  | ☐  | ☐  | ☐  | ☐  |
| Hero             | ☐  | ☐  | ☐  | ☐  |
| Music section    | ☐  | ☐  | ☐  | ☐  |
| About bio        | ☐  | ☐  | ☐  | ☐  |
| Live empty state | ☐  | ☐  | ☐  | ☐  |
| Contact/footer   | ☐  | ☐  | ☐  | ☐  |

**Translation review — who signs off on each language:**

- **RU** — owner (native) and D'Shen both fluent. Safe.
- **EN** — owner is C2. Safe to draft + self-review.
- **UA** — D'Shen is a **native Ukrainian speaker** → she reviews UA.
- **RO** — ⚠️ the gap. Owner and D'Shen are both **A0** in Romanian. RO copy MUST be
  checked by local Romanian-speaking friends before publish. **Never ship RO
  unreviewed** — machine/draft RO is a placeholder only.
