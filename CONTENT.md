# CONTENT.md — canonical content & data for dshenmusic.com

Single source of truth for all copy, links, and asset requirements.
All display text ultimately lives in `i18n/*.json`; this file is where it's decided.

## Artist

- Artist name: **D'Shen** (never transliterated, never restyled)
- Person: Darina Rogozinskaya — singer, theater actress
- Base: Chișinău, Moldova
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

- **«Корабли»** — released June 26, 2026. Cover art exists.
- Second single — released, cover art exists. **[TBD: confirm which track and its
  release date — ask owner]**

## Official links

- Spotify: https://open.spotify.com/artist/1Gr5VQ2UXkaIadQ9p9vkc1
- Apple Music: https://music.apple.com/us/artist/dshen/6778941448
- YouTube: https://www.youtube.com/channel/UCpyidY4sL6-NJ1Xt1ezpG2A (@dshenmusic)
- Deezer: https://www.deezer.com/en/artist/396177361
- Instagram: https://www.instagram.com/rogozinskaya.darina/
- Contact email: **contact@dshenmusic.com** (Porkbun forwarding — live; show on site)

## Video section

Embed from the YouTube channel. **[TBD: owner to pick 2–4 specific video URLs —
music video(s), live performance from the July 11 concert if published]**
Facade/lazy embeds only.

## About — bio

**[TBD: owner provides base bio text in RU or EN; translate to remaining languages
and review each — RO and UA reviewed by owner before publish]**
Angle to hit: theatrical background, sincerity, songs as small plays; keep under
~120 words per language.

## Live

- Currently no announced upcoming dates → show the graceful empty state
  ("Follow @rogozinskaya.darina for announcements").
- Past: debut concert July 11, 2026, Chișinău — usable as a photo/credibility
  moment, not a listing.

## Assets needed in `assets/` (owner exports manually from Drive)

Drive folder is on a separate Google account — agents cannot access it. Owner copies:

1. Album cover «Там и тогда» — highest-res available (min 3000×3000 master;
   web versions will be generated from it)
2. Single cover «Корабли»
3. Single cover — second single
4. UNPLUGGED concert photos — 5–10 best, highest-res, especially strong solo
   portraits (hero candidates) — horizontal AND vertical options
5. Any D'Shen logo/wordmark files if they exist (otherwise wordmark is typographic)

Naming: lowercase, hyphens: `cover-tam-i-togda.jpg`, `unplugged-01.jpg`, etc.
Agents then generate optimized WebP/responsive versions into `assets/` — originals
can live in `assets/src/` (or stay out of the repo if very large; >10MB files
should not be committed).

## i18n copy status

| Key set          | EN | RU | RO | UA |
|------------------|----|----|----|----|
| Nav + UI chrome  | ☐  | ☐  | ☐  | ☐  |
| Hero             | ☐  | ☐  | ☐  | ☐  |
| Music section    | ☐  | ☐  | ☐  | ☐  |
| About bio        | ☐  | ☐  | ☐  | ☐  |
| Live empty state | ☐  | ☐  | ☐  | ☐  |
| Contact/footer   | ☐  | ☐  | ☐  | ☐  |

Owner speaks RU (native), EN, RO, UA — all translations get his review before merge.
