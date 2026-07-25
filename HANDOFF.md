# HANDOFF.md — current state & next steps (dshenmusic.com)

**For the next session.** The production site is built and multilingual. This is the
authoritative snapshot of where things stand, what was decided, and what's left. Read
`CLAUDE.md` first for the non-negotiable rules; this file is the live status.

_Last updated: 2026-07-24 (album release day)._

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
- Album **«Там и тогда» / “There and Then”** **released 2026-07-24** — site flipped to post-release:
  hero CTA is now the journey CTA **“Embark” / «Погрузиться»** → the same `band.link/dshen_tam_i_togda`
  hub (now streaming), and the chips read **“Out now”**. See the 2026-07-24 decisions-log entry.

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
  - v1 `mFEPXxBuKIc` — “On “Ships”” · Behind the song · **0:45** (talking-head, confirmed)
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
| **Native Romanian speaker(s)** | Review **all of `ro.json`** — hard gate. Owner + artist are A0; the whole file is placeholder-quality until checked. Watch the coined `„NeActriță"` and the title renderings (`„Acolo și atunci"`, `„Corăbii"`). **Top 4 questions from the 2026-07-25 pass:** (1) does `„Cufundă-te"` work alone on a button, or does *a se cufunda* need a complement? (2) is `„formată pentru teatru"` natural, or does RO want `„cu studii de teatru"`? (3) the album says `„8 piese"` (tracks) and the About heading says `„o mică piesă de teatru"` (a play) — does the second *piesă* trip you up? (4) anything that reads Bucharest-standard in a way that would feel off to a Chișinău audience? |
| **D'Shen (native UA)** | Sign off `ua.json`: confirm the coined `«НеАкторка»`, `label.about` (“Про мене” vs “Про D'Shen”), `label.live` (“Наживо” vs “Виступи”). **About block reviewed 2026-07-25** — her edits applied (singular `about.title`, rewritten closing sentence, `цілком` → `без залишку`); the rest of the file still needs her pass. **New from the 2026-07-25 AI-voice pass — her ear decides:** `«Вже вийшов»` → `«Уже вийшов»` (euphony rule says «уже», but some speakers read it as Russian-adjacent — and this is the hero release chip, the most visible string changed); and `«вихована для театру»` → `«з театральною освітою»` — the calque is real, but **she read that block on 07-25 and left the phrase standing**, so she may have meant it. Warmer non-calque alternative if she wants the poetry back: `«вихована театром»`. **And one tiebreak for her:** `«зустрічаються із сучасним»` — is `«із»` or `«з»` right before `«сучасним»`? Two reviewers disagreed; her original was kept pending her ear. |
| **Artist** | Confirm the **About bio**. Her UA edits (2026-07-25) are now the source: singular heading, `без залишку` opening, her closing sentence. **EN / RU / RO were re-rendered from her UA line** and need her nod on the rendering (EN heading “A song is a small play”; RU `пение и душа`; RO is A0 anyway). Also from the 07-25 pass: EN now says **“the Russian romance”** for `романс` — correct English for the genre, but it makes an explicit lineage claim on the EN page, so confirm she's happy in it. |
| **Owner** | Minor: RU streaming line `«Яндекс Музыка»` vs Latin “Yandex Music” (for the record: Cyrillic is the correct post-2023 brand form; the only argument for Latin is icon-row consistency). **Bigger, from the 07-25 pass: `hero.cta`.** “Embark” / «Погрузиться» / „Cufundă-te" / «Зануритися» is textbook LLM-default CTA vocabulary and the only button that doesn't say what it does. Left untouched because it's your 07-24 decision — reopen or confirm. Alternatives proposed per language in the decisions log. |

Reviewer confidence (second-pass, NOT native): **RU ~85% · UA ~88% · RO ~75%** — nudged up by the
2026-07-25 AI-voice pass, which removed the translationese but does **not** substitute for a native
read. RO's hard gate is unchanged.

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

- **2026-07-25 (AI-voice pass)** — Audited all four locale files against a freshly-researched
  rubric of 2026-era LLM writing tells (lexical, syntactic, rhetorical, per-language calque and
  typography markers; sources indexed in the commit discussion). **28 strings changed across
  EN/RU/RO/UA + 3 `index.html` meta tags.** The bios were never the problem — every one carries
  11–21 concrete particulars per 100 words, far above the "abstraction density" threshold that
  actually flags generated prose. What the pass found was **translationese**: English sentence
  architecture surviving into the other three languages. Highlights:
  - **RU** «актриса *приходит* в роль» → «*входит* в роль» (a dead calque of "comes to a role");
    «с театральным образованием» → «по образованию театральная актриса»; «слушайте везде» →
    «Слушайте на всех площадках».
  - **UA** «співає *з* Кишинева» → «співає *в* Кишиневі»; «вихована для театру» →
    «з театральною освітою»; «Вже вийшов» → «Уже вийшов» and «із сучасним» → «з сучасним»
    (милозвучність); «Вихід … за {n}» → «Вийде … через {n}».
  - **RO** removed the gerunziu tail „fiecare desfășurându-se ca…", the empty copula
    „acesta este", and fixed the bare-adjective a11y labels „Principală"/„Mobilă".
  - **EN** „the romance tradition" → **"the Russian romance"** (the genre «романс» has a name in
    English; the old phrasing pointed readers at medieval romance), and og/twitter
    "New album" → "Debut album".
  - **`live.photo_right_alt` was factually wrong in all four languages** — checked against
    `DSC09505` and `PHOTOS.md`: it is **one** cocktail table with a red rose, not "cocktail
    tables". Corrected in EN/RU/RO/UA.
  - **`hero.cta` deliberately NOT changed.** “Embark” sits verbatim on the rubric's list of
    default LLM CTA verbs (Discover/Explore/Unlock/Embark/…), and it is the one button that
    doesn't say what it does — its own `aria-label` has to explain it. But it is an owner
    decision from 2026-07-24 across four languages, so it is **flagged, not touched**. See the
    open-questions table above.
  - **D'Shen's own Ukrainian wording was treated as locked** and verified byte-identical after
    the pass: `about.title`, «— без залишку», «кожна з яких розгортається», and her whole closing
    sentence. Where the rubric flagged something inside her text (the `…`, the repeated «на сцені»,
    the aphoristic close) it was recorded as an observation and left alone — the repetition is
    hers and deliberate, not a translation artifact.

  **Adversarial re-audit of the pass itself (same day).** The edits were then re-checked against
  the rubric by a reviewer that had not made them. Hard locks all passed; **five edits were
  reverted as scope creep** — style passes making content decisions they hadn't earned:
  - RU `video.meet.meta` «Беседа» (a change to «История песни» was an unverified reframing of what
    the video *is* — nobody watched it) and RU `music.singles_label` «Вышедшие синглы» (tightening
    for its own sake; EN/RO/UA all keep "released").
  - RO `„jucate pe scenă"` — a change to `„puse în scenă"` was **a real meaning error**: *a pune în
    scenă* is to stage/direct a production, but the source (RU «сыгранных» / UA «відтворених» /
    EN "played out") means *performed*. An A0 editor nearly had her directing her own songs.
  - UA **«із сучасним» restored**. The change to «з» was made on euphony grounds, but «із» is the
    prescribed form before с/ш/щ/ч/ц, and the same pass wrote «із червоною трояндою» before ч —
    the rule was applied inconsistently. Reverted to the version D'Shen saw on 07-25. **Ask her.**
  - Two genuine gaps it found were fixed instead: EN `meta.description` named only Spotify + Apple
    while its own `og:description` said "and more" (now consistent), and UA `meta.description` kept
    the same "listen everywhere" calque EN and RU had both just dropped (now «на всіх платформах»).
  - Not changed, and deliberately so: **EN `a11y.nav_primary` stays the bare "Primary"** — RU/RO/UA
    needed the noun added because a dangling adjective isn't a label in those languages, but in
    English W3C guidance is the opposite (don't repeat the landmark role in its `aria-label`).
  - Independent concrete-noun recount of the bios: **EN 14 · RU 14 · RO 14 · UA 13 per 100 words**
    against a fail threshold of 3. The bios never read as generated; the problem was translationese
    in the surrounding strings, and that is what got fixed.

- **2026-07-24 (album release day)** — Album **«Там и тогда» is OUT**; site flipped presave → release:
  - **Hero CTA** is now a "journey" CTA (owner steer: "more about the journey — типа погрузиться / embark"):
    **“Embark” / «Погрузиться» / „Cufundă-te" / «Зануритися»** → the same `band.link/dshen_tam_i_togda`
    hub (owner confirmed it now serves streaming). Added `hero.cta_aria` ("Listen to the album") so the
    one-word button has a clear accessible name. Album-card button `music.presave` → **“Listen”** (key name
    kept — value repurposed). Countdown chips already auto-flip to **“Out now”** on/after release; static
    HTML fallbacks updated too. All `meta`/OG/Twitter copy → "out now".
  - **Shipped ALL 4 languages to production** — owner **explicitly overrode** the "never ship RO unreviewed"
    gate on release day. **RU/RO/UA are still unreviewed drafts.** RO CTA **„Cufundă-te"** is an A0 draft —
    still needs a native pass, as does the rest of `ro.json` and the bio.
  - **Issue #5 (link-share preview):** OG/Twitter *title* → album hook ("New album “There and Then” — out
    now"), removing the duplicate "D'Shen" (was site_name + title) and the trailing period. OG *image* kept
    as the logo (owner choice).
  - **Issue #3:** removed "російською" ("writes songs *in Russian*") from the UA bio.
  - **Issue #4:** RU-only **Yandex Music** footer icon → `music.yandex.com/artist/26134715` (official 2023
    sunburst mark, monochrome via `currentColor`). New generic mechanism: `[data-lang-only="ru"]` elements
    are toggled in `applyDict()` and hidden by default via `.social[hidden]{display:none}`.

- **2026-07-18 (owner review polish)** — Round of owner-requested tweaks on `build/production-site`:
  - **Hero:** dropped the duplicate wordmark logo inside the hero (the nav mark is enough);
    hero H1 sized to stay **one line** (`clamp(2.1rem, 5vw, 4rem)`).
  - **Album title** sized to **one line** (`clamp(2.0rem, 4.4vw, 3.8rem)`) — verified against
    real Oswald metrics so it holds one line in all four languages down to ~600px.
  - **Video v1 retitled** from the long "In the darkest times — on «Ships»" to a plain
    **“On “Ships””**; per-language short forms are RU `О «Кораблях»`, RO `Despre „Corăbii"`,
    UA `Про «Кораблі»`. Video **captions** now split **title-left / meta-right**.
  - **Released-singles order = most-recent-first: NonActress → Ships** (was Ships → NonActress).
  - **Footer copyright** added + formatted **`2026 © D'Shen. All rights reserved.`**
    (translated per language: RU `Все права защищены.`, RO `Toate drepturile rezervate.`,
    UA `Всі права захищені.`). Also **fixed a reveal bug**: the copyright never faded in
    because, as the last element, it can't scroll high enough to hit its `top 88%` reveal
    trigger — `main.js` now has a `bottom bottom` safety-net that reveals any element still
    hidden once the page bottom is reached (+ a load-time check for deep-links to `#contact`).
  - **About bio** and **live show-date** bumped a step (`1.05→1.15rem`, `11→13px`).
  - **Live photo `DSC09505`** recropped to a **centered ~1.2× zoom** (trims the figure at the
    left edge) — symmetric crop, vertical center unchanged; both webp variants overwritten at
    their original dimensions, so no markup/`srcset` change. Pristine originals in git history.
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
