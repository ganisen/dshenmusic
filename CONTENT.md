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

## Assets in `assets/` (owner exports manually from Drive)

Drive folder is on a separate Google account — agents cannot access it. Owner has
now delivered the originals below (folder-per-release, multiple aspect ratios):

| What | Folder | Status |
|------|--------|--------|
| Album cover «Там и тогда» | `assets/tam_i_togda/` | ✅ original + 1:1, 3:2, 2:3, 3:4, 4:3, 16:9, 9:16 crops + YouTube banner |
| Single cover «Корабли» | `assets/korabli/` | ✅ 1:1 + 9:16 |
| Single cover «Неактриса» | `assets/neaktrisa/` | ✅ 1:1 + 9:16 |
| UNPLUGGED concert photos (15, culled) | `assets/unplugged-2026-07-11/` | ✅ see `PHOTOS.md` there for the described catalog |
| D'Shen logo / wordmark | `assets/dshen-logo/` | ✅ `.ai`, `.eps` (black+white), `.png` (black+white) |

⚠️ **These are full-res originals — ~240 MB total, several files >10 MB** (largest
concert frame is 14 MB). Per the repo rule, originals >10 MB should NOT be committed
to git. Still TODO: generate optimized WebP/responsive web versions, and decide where
originals live (`assets/src/`, Git LFS, or out-of-repo). See the note to the owner in
the working summary — don't `git add assets/` wholesale.

Web-version naming when generated: lowercase, hyphens (e.g. `cover-tam-i-togda-1x1.webp`,
`unplugged-hero.webp`).

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
