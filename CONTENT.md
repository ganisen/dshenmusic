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

- Release date: **July 24, 2026** — **RELEASED**. Live on Spotify / Apple Music / YouTube Music / Deezer.
- Listen hub (auto-converted from the presave smart link): **https://band.link/dshen_tam_i_togda**
- **Post-release CTA (live 2026-07-24):** hero button = the journey CTA **“Embark” / «Погрузиться» /
  „Cufundă-te" / «Зануритися»** (owner-chosen "about the journey" framing) → the band.link hub. Album-card
  button + singles = plain "Listen". Countdown chips auto-show **“Out now”**. (Owner confirmed 2026-07-24
  that band.link now serves streaming, so the same URL is reused.)

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

**Site display order = most-recent-first: NonActress (Jul 10) → Ships (Jun 26)** (set 2026-07-18).

- **«Корабли»** (EN «Ships», track 6) — released June 26, 2026. Cover art: `assets/korabli/`.
  - **Site "Listen ↗" card → band.link hub: https://band.link/dshenkorabli** (as of 2026-07-18)
  - Official audio (distributed via TuneCore): https://www.youtube.com/watch?v=b4fyT2Es-sM
  - Teaser snippet (27 s): https://youtu.be/57JVbhlsunk
- **«Неактриса»** (EN «NonActress», track 4) — released July 10, 2026. Cover art: `assets/neaktrisa/`.
  - **Site "Listen ↗" card → band.link hub: https://band.link/dshen_neaktrisa** (as of 2026-07-18)
  - Official audio (distributed via TuneCore): https://www.youtube.com/watch?v=X57QnzJtcUk
  - Release metadata: ISRC `QT6662667261` · UPC `859741394974` · Label D'Shen ·
    Genre Rock / Alternative.

## Official links

- Spotify: https://open.spotify.com/artist/1Gr5VQ2UXkaIadQ9p9vkc1
- Apple Music: https://music.apple.com/us/artist/dshen/6778941448
- YouTube: https://www.youtube.com/channel/UCpyidY4sL6-NJ1Xt1ezpG2A (@dshenmusic)
- Deezer: https://www.deezer.com/en/artist/396177361
- Instagram: https://www.instagram.com/rogozinskaya.darina/
- Contact email: **contact@dshenmusic.com** (Porkbun forwarding — live; show on site)
- Footer social icon row = Spotify · Apple Music · YouTube · Deezer · Instagram (44px circles).
  **Do not add Russian platforms** (Yandex Music, VK Music, Zvuk) — see the 2026-08-22 safety
  scrub in HANDOFF.md. The `data-lang-only` gating hook stays in `applyDict()` but is unused.
  (The old "Spotify · Apple Music · …" text line under the CTA was removed 2026-07-18.)
- Footer copyright (`footer.copyright`, all langs): **`2026 © D'Shen. All rights reserved.`**
  — year-first, `©` glyph, then the localized "all rights reserved" (RU `Все права защищены.`,
  RO `Toate drepturile rezervate.`, UA `Всі права захищені.`). Format set 2026-07-18.

## Video section

Facade/lazy embeds only (`youtube-nocookie` iframe injected on click). **2 videos in the
`#video` grid** — the grid is for the songs. Concert footage lives in `#live` instead
(the UNPLUGGED aftermovie, see Live below), so a count of 2 here is correct, not stale.

| # | Title | YouTube ID | Meta |
|---|-------|------------|------|
| 1 | On “Ships” (shortened 2026-07-18 from “In the darkest times — on “Ships””; per-lang: RU «О «Кораблях»», RO „Despre „Corăbii"", UA «Про «Кораблі»») | `mFEPXxBuKIc` | Behind the song · 0:45 (talking-head — confirmed 2026-07-18) |
| 2 | “Ships” — snippet | `57JVbhlsunk` | Teaser · 0:27 (snippet — confirmed) |

The two **official-audio** videos are the audio masters (reference). As of 2026-07-18 the
released-singles cards in Music link to the **band.link hubs** (see Released singles above),
NOT directly to these YouTube URLs:
- «Корабли» / «Ships» official audio: https://www.youtube.com/watch?v=b4fyT2Es-sM
- «Неактриса» / «NonActress» official audio: https://www.youtube.com/watch?v=X57QnzJtcUk

## About — bio

Section heading: **A song is a small play** (singular — artist's call, 2026-07-25: the
plural "Songs as small plays" reads as being *about the songs*, the singular is about a
state of mind).

EN bio — **revised 2026-07-25 from D'Shen's UA edits; EN/RU/RO rendering still hers to confirm.
Language-of-the-lyrics wording removed 2026-08-22 (safety scrub — see HANDOFF.md):**

> Darina came to music the way an actress comes to a role — holding nothing back. Born in
> Odesa and trained for the theater, now singing from Chișinău, she writes songs that each
> unfold like a small play: a scene, a confession, a curtain. D'Shen is her
> stage — a place where the romance tradition and Silver Age poetry meet a modern, intimate
> voice. Her debut album “There and Then” gathers eight small lives, played out on stage…
> memory, cities, ships and dreams — the singing and the soul of a woman who dared to speak
> the truth on stage.

~100 words. Uses **Darina** (public alias), not the legal name. Fact base: born Odesa,
based Chișinău, trained theatre actress. RU/RO/UA produced from this per the i18n reviewer
rules below.

The closing sentence is **the artist's own wording**, authored in UA — the other three
languages are translations *of her line*, not of the earlier English draft. Her UA original:

> Її дебютний альбом «Там і тоді» збирає вісім маленьких життів, відтворених на сцені…
> пам'ять, міста, кораблі та мрії — це спів та душа тієї, хто на сцені зважилася говорити
> правду.

## Live

- **Upcoming show (added 2026-09-01), first in the section — above the follow line.**
  `.live__next`: an accent `NEXT SHOW` label, then a bordered card holding an accent date
  badge (`04` / `SEP`), the title `D'Shen — UNPLUGGED`, the meta line
  `Cult Space · ARTCOR, Chișinău · 19:30 · doors 18:30`, and a `TICKETS` button →
  https://iticket.md/en/event/dshen-unplugged-cult-space (locale paths: `/ru/`, `/ro/`;
  UA uses `/en/` — iticket has no Ukrainian). Full event data: Fri 4 Sep 2026, 19:30,
  doors 18:30, Cult Space · ARTCOR, str. 31 August 1989 137, Chișinău, 400–600 lei.
  - Keys: `live.next_label` · `live.next_month` · `live.next_title` · `live.next_venue` ·
    `live.next_time` · `live.tickets` · `live.tickets_aria` · `live.tickets_url`.
    The day number `04` is in the HTML, not the dictionary — digits don't translate.
  - The block carries `data-until="2026-09-05T00:00:00"`; `main.js` removes it once that
    passes, so the site never shows a finished date. The matching `MusicEvent` JSON-LD in
    `<head>` is **not** auto-removed — delete or replace it by hand.
  - When there is no announced date the section falls back to its old single line
    (no "no shows" heading): `FOLLOW @rogozinskaya.darina FOR ANNOUNCEMENTS`
    (handle in accent → Instagram), which now sits **under** the upcoming-show card.
- Past moment, `live.unplugged_title` / `live.unplugged_meta` (owner wording 2026-08-10):
  **`UNPLUGGED – Aftermovie`** — **en dash, not em** — with `11 July 2026 · Chișinău`
  **right-aligned on the same row** (`justify-content:space-between`), so the two read as
  two cells rather than one run-on line. Per language: RU `UNPLUGGED – Афтермуви`,
  RO `UNPLUGGED – Aftermovie`, UA `UNPLUGGED – Афтермуві`.
- Then the **aftermovie**, a **hairline divider**, then the photo grid: full-width 16:8
  `DSC09446` on top, two 3:4 halves below (`DSC09476`, `DSC09505`). A credibility moment,
  not a listing. Full catalog: `assets/unplugged-2026-07-11/PHOTOS.md`.
- **Aftermovie** (added 2026-08-10), directly under the show heading, above the photos:
  YouTube `fjEmQEnzrl4` — https://www.youtube.com/watch?v=fjEmQEnzrl4
  ("D'Shen – Unplugged | 2026 Aftermovie"). Same facade pattern as the `#video` cards,
  thumbnail `assets/video/fjEmQEnzrl4.webp` (owner-supplied frame with the UNPLUGGED
  wordmark already on it — not the YouTube auto-thumbnail).
  **No caption under the player** — the word "Aftermovie" moved up into the heading, and a
  `.live__divider` hairline separates the film from the photo gallery instead. There is
  therefore **no `live.aftermovie` key**; don't reintroduce one.
  The play button's `aria-label` and the injected iframe's `title` both resolve from
  `live.unplugged_title`, so the film needs no localized strings of its own.

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
| Video thumbnails | owner-supplied frames (Downloads / editing exports, not in `assets/src/`) | `video/<youtube-id>.webp` at 1280×720 — `mFEPXxBuKIc` (34 KB), `57JVbhlsunk` (42 KB), `fjEmQEnzrl4` (65 KB, q70 — busier frame, q80 came out 84 KB). Self-hosted on purpose: nothing is ever fetched from `img.youtube.com` at runtime |
| Logo / wordmark | `dshen-logo/` (`.ai`, `.eps`, full-res `.png`, black+white) | `logo/dshen-logo-{black,white}-{800,1600}.png` |
| Fonts | src masters `fonts/oswald/` (live) + `fonts/lora/` (dormant) + `fonts/caveat/` (retired); `fonts/ambition-ink/` artwork-only | `fonts/oswald-var.woff2` (the single live font) + dormant `fonts/lora-var.woff2` + `OFL-*.txt` — subset variable woff2, all 4 langs ✓ |

Total committed web assets ≈ **7 MB** (largest single file 452 KB). The site now runs a
**single live font** — **Oswald** (~50 KB, UI + display) — committed as a subset variable
`woff2` in `assets/fonts/`; **Lora** (~84 KB) sits alongside it dormant for an easy
switch-back, and Caveat was removed. See DESIGN.md → Typography for the `@font-face`. Src-only (never
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

All four languages are live in `i18n/` (`en.json` · `ru.json` · `ro.json` · `ua.json`) —
every section, all shipped. **Review is continuous, against the live site — it is not a
publish gate** (owner decision 2026-07-24, reaffirmed 2026-08-10). New copy is written to
the best standard available and ships in all four languages at once; what's unverified is
logged here so a reviewer has a worklist.

| Lang | State | 2nd-pass confidence | Outstanding review debt |
|------|-------|---------------------|-------------------------|
| EN   | ✅ live | — | About block re-rendered 2026-07-25 from D'Shen's UA edits — artist OK still open |
| RU   | ✅ live | ~85% | owner (native) confirms wording — `пение и душа` |
| RO   | ✅ live, weakest | ~75% | owner + artist are A0 → needs a local Romanian read; see the question list below |
| UA   | ✅ live; About block signed off 2026-07-25 | ~88% | D'Shen (native) reviews the rest; confirm «НеАкторка» |

Confidence is a self-review second pass, **not** native verification. Full per-language
flags and the decisions log: see `HANDOFF.md`.

**Who reviews each language:**

- **RU** — owner (native) and D'Shen both fluent. Safe.
- **EN** — owner is C2. Safe to draft + self-review.
- **UA** — D'Shen is a **native Ukrainian speaker** → she reviews UA.
- **RO** — the weak spot: owner and D'Shen are both **A0**. RO ships anyway; local
  Romanian-speaking friends review it in place. Never drop an RO key to avoid the
  problem — a missing key silently falls back to English mid-page, which is worse than
  imperfect Romanian.

**Open RO questions for whoever reads it** (from the 2026-07-25 pass):
1. Does `„Cufundă-te"` work alone on a button, or does *a se cufunda* need a complement?
2. Is `„formată pentru teatru"` natural, or does RO want `„cu studii de teatru"`?
3. The album says `„8 piese"` (tracks) and the About heading `„o mică piesă de teatru"`
   (a play) — does the second *piesă* trip you up?
4. Anything reading Bucharest-standard in a way that would feel off in Chișinău?
5. The coined `„NeActriță"` and the title renderings `„Acolo și atunci"` / `„Corăbii"`.

**Open RO questions from the 2026-09-01 show-card pass:**
6. `„Următorul concert"` as the section label over an upcoming date — natural, or does a
   Chișinău poster say `„Următorul spectacol"` / `„Urmează"`?
7. Doors wording: `„19:30 · accesul de la 18:30"` — is *accesul de la* how a venue writes it,
   or should it be `„ușile se deschid la 18:30"`?
8. Month abbreviation on the date badge: `sep` (we ship lowercase, CSS uppercases it) —
   correct for RO, or `sept`?
