# HANDOFF.md — current state & next steps (dshenmusic.com)

**For the next session.** The production site is built and multilingual. This is the
authoritative snapshot of where things stand, what was decided, and what's left. Read
`CLAUDE.md` first for the non-negotiable rules; this file is the live status.

_Last updated: 2026-08-22 (safety scrub — Russia/Yandex references removed; internal docs de-indexed)._

---

## TL;DR

- The **production single-page site is live** at dshenmusic.com — `index.html` /
  `style.css` / `main.js`. `BUILD.md` (the original build brief) is **done**.
- **All four languages are live** in `i18n/`. EN is final; RU/UA/RO carry review debts
  (below) that are worked off **against the live site** — they don't hold up a deploy.
- **`main` is production and auto-deploys within ~1 min of a push.** `build/production-site`
  is fully merged and can be deleted. Do feature work on a branch → Cloudflare builds a
  preview at `<branch-name>.dshenmusic.pages.dev` → merge when the owner approves.
- Album **«Там и тогда» / “There and Then”** **released 2026-07-24** — site flipped to post-release:
  hero CTA is now the journey CTA **“Embark” / «Погрузиться»** → the same `band.link/dshen_tam_i_togda`
  hub (now streaming), and the chips read **“Out now”**. See the 2026-07-24 decisions-log entry.
- **Safety scrub 2026-08-22:** every reference to Russia / the Russian language / Yandex is gone
  from the shipped site, and the internal `.md` docs are no longer publicly fetchable. **Do not
  re-add any of it.** See the 2026-08-22 decisions-log entry.

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
- **Video grid** (facade/lazy YouTube) — the songs only:
  - v1 `mFEPXxBuKIc` — “On “Ships”” · Behind the song · **0:45** (talking-head, confirmed)
  - v2 `57JVbhlsunk` — ““Ships” — snippet” · Teaser · **0:27** (snippet, confirmed)
- **Live section** — follow line + the UNPLUGGED block: heading `UNPLUGGED – Aftermovie`
  (**en dash**) with the date/city right-aligned on the same row, then the **aftermovie**
  (`fjEmQEnzrl4`, added 2026-08-10, same facade pattern, no caption), a hairline
  `.live__divider`, then the 3-photo grid. Concert footage goes here, not in the video
  grid — don't "fix" the grid's count of 2.
- **Footer social icons** are the **official Simple Icons** marks (Spotify, Apple Music,
  YouTube, Deezer=current 2023 heart, Instagram) — monochrome via `fill="currentColor"`,
  brand-audited as correct + current; nominative footer/profile-link use is compliant.
- **Countdown grammar is correct in every language** — `main.js` picks `countdown.days_<cat>`
  via `Intl.PluralRules`; the Slavic/Romanian plural forms (`days_few`, RU/UA `days_many`,
  RO `de zile` for ≥20) are in the JSON. Verified for n=1..22.
- **Typography finalized to a single font — Oswald** across the whole site (was the
  two-font Caveat + Oswald system). Lora is kept dormant for a one-line switch-back; see the
  decisions log below and `DESIGN.md → Typography`.

## Open review debts (the site is already live — these are worked off in place)

**Not gates.** Everything below ships and is reviewed against the live site; that is the
standing decision (2026-07-24, reaffirmed 2026-08-10). Nothing here blocks a deploy.

| Owner | Needs to |
|-------|----------|
| **Native Romanian speaker(s)** | Review **all of `ro.json`** — highest-value debt, since owner + artist are A0 and nobody on the team can spot an error. Watch the coined `„NeActriță"` and the title renderings (`„Acolo și atunci"`, `„Corăbii"`). **Top 4 questions from the 2026-07-25 pass:** (1) does `„Cufundă-te"` work alone on a button, or does *a se cufunda* need a complement? (2) is `„formată pentru teatru"` natural, or does RO want `„cu studii de teatru"`? (3) the album says `„8 piese"` (tracks) and the About heading says `„o mică piesă de teatru"` (a play) — does the second *piesă* trip you up? (4) anything that reads Bucharest-standard in a way that would feel off to a Chișinău audience? |
| **D'Shen (native UA)** | Sign off `ua.json`: confirm the coined `«НеАкторка»`, `label.about` (“Про мене” vs “Про D'Shen”), `label.live` (“Наживо” vs “Виступи”). **About block reviewed 2026-07-25** — her edits applied (singular `about.title`, rewritten closing sentence, `цілком` → `без залишку`); the rest of the file still needs her pass. **New from the 2026-07-25 AI-voice pass — her ear decides:** `«Вже вийшов»` → `«Уже вийшов»` (euphony rule says «уже», but some speakers read it as Russian-adjacent — and this is the hero release chip, the most visible string changed); and `«вихована для театру»` → `«з театральною освітою»` — the calque is real, but **she read that block on 07-25 and left the phrase standing**, so she may have meant it. Warmer non-calque alternative if she wants the poetry back: `«вихована театром»`. **And one tiebreak for her:** `«зустрічаються із сучасним»` — is `«із»` or `«з»` right before `«сучасним»`? Two reviewers disagreed; her original was kept pending her ear. |
| **Artist** | Confirm the **About bio**. Her UA edits (2026-07-25) are now the source: singular heading, `без залишку` opening, her closing sentence. **EN / RU / RO were re-rendered from her UA line** and need her nod on the rendering (EN heading “A song is a small play”; RU `пение и душа`; RO is A0 anyway). (The 07-25 EN phrasing “the Russian romance” was reverted to **“the romance tradition”** by the 2026-08-22 safety scrub — that question is closed.) |
| **Owner** | The aftermovie transliterations in `live.unplugged_title` were confirmed 2026-08-10 — settled. (The old Yandex-wording question died with the 2026-08-22 safety scrub.) |

`hero.cta` is **settled** — “Embark” / «Погрузиться» / „Cufundă-te" / «Зануритися» was
flagged on 07-25 as LLM-default CTA vocabulary; owner confirmed on 2026-08-10 that it is
an intentional choice. Don't reopen it.

Reviewer confidence (second-pass, NOT native): **RU ~85% · UA ~88% · RO ~75%** — nudged up by the
2026-07-25 AI-voice pass, which removed the translationese but does **not** substitute for a native
read. RO remains the weakest file; it ships regardless.

## How to work with it

**View locally** (the i18n loads via `fetch`, so `file://` won't work — needs a server):
```
python3 -m http.server 8000    # then open http://localhost:8000  (Ctrl-C to stop)
```
Click EN/RU/RO/UA in the header to switch. Language persists via `?lang=` + localStorage.

**Preview (shared):** push any non-`main` branch → Cloudflare builds
`<branch-name>.dshenmusic.pages.dev` (~1 min), slashes becoming dashes.

**Ship to production:** merge the branch → `main`, which auto-deploys to `dshenmusic.com`
within ~1 min. Gate this on **owner approval only** — translation review is continuous and
never blocks a deploy.

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

- **2026-08-10 (UNPLUGGED aftermovie)** — Added the concert film `fjEmQEnzrl4`
  ("D'Shen – Unplugged | 2026 Aftermovie") to the site.
  - **Placed in `#live`, not the `#video` grid.** Three homes were considered: a third
    card in the video grid (which would auto-flow 3-across with no CSS change), a featured
    full-width card above the grid, or inside the UNPLUGGED block. Live won because the
    film is *of* the 11 July show whose photos already sit there — film and photos of the
    same night belong together, and `#video` stays about the songs. This is also where the
    old Phase 2 note ("possibly expand the Live section") pointed.
  - **Owner revision, same day.** First pass captioned the player `AFTERMOVIE` under a
    `UNPLUGGED — the debut` heading. Owner reworked it: the heading became
    **`UNPLUGGED – Aftermovie`** (**en dash**, and "Aftermovie" replaces "the debut"), the
    date/city moved to the **right of the same row** at a larger size
    (`justify-content:space-between`, `clamp(14px, 1.5vw, 17px)`) so the row reads as two
    cells, the caption under the player was **deleted**, and a **hairline divider**
    (`.live__divider`, `var(--hairline)`) now separates film from photos. The
    `live.aftermovie` key was removed from all four locales — the word lives in the
    heading now. At narrow widths the head wraps the date onto its own line; verified no
    overflow at 500px.
  - **Thumbnail is an owner-supplied frame**, not the YouTube auto-thumbnail: a 3840×2160
    export with the wordmark already on it → `assets/video/fjEmQEnzrl4.webp` 1280×720.
    Encoded at **q70 (65 KB)**; q80 came out 84 KB, twice its neighbours, because the frame
    is a dark scene full of fairy-light highlights. q70 showed no banding in the darks.
  - **`main.js` iframe-title fallback widened.** `initVideos()` derived the iframe `title`
    from `.video__title`, which this card deliberately doesn't have — the frame would have
    been titled "Video". The button now carries a localized `data-video-title` (resolved
    from the existing `live.unplugged_title` via `data-i18n-attr`, which does a generic
    `setAttribute` so any attribute name works), and the fallback reads that. Verified:
    RU load → frame title `UNPLUGGED — дебют`, focus moves to the iframe.
  - **Net zero new i18n keys.** `live.unplugged_title` was reworded in all four locales
    (RU «UNPLUGGED – Афтермуви», UA «UNPLUGGED – Афтермуві» — owner confirmed the
    transliterations read fine); the `aria-label` and iframe title both resolve from it.
  - **RO shipped with everything else.** Owner reaffirmed the 07-24 override and asked for
    the gate language to be removed from the docs — RO ships every release and is reviewed
    in place. `CLAUDE.md`, `CONTENT.md` and this file were rewritten accordingly; the RO
    question list survives as a worklist in `CONTENT.md`.
  - **`hero.cta` confirmed as intentional** and de-flagged. Not an AI tell — owner's call.
  - Fixed a real miss from the 07-25 pass: `live.photo_right_alt` was corrected in all four
    JSONs but the inline HTML default still described cocktail tables that aren't in frame.

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
    English; the old phrasing pointed readers at medieval romance) — **reverted 2026-08-22**,
    see the safety scrub — and og/twitter "New album" → "Debut album".
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
  - **Issue #4:** added an RU-only extra footer icon (**removed again by the 2026-08-22 safety scrub**).
    It introduced the generic mechanism that survives it: `[data-lang-only="ru"]` elements
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
- **2026-08-22** — **Safety scrub (owner request).** D'Shen travels to Odesa 2026-08-23; on the
  assumption she may be screened, every reference tying the project to Russia, the Russian
  language, or Russian platforms was removed from the shipped site:
  - **Yandex Music footer icon deleted** (`index.html` anchor + SVG, and the `social.yandex`
    key in all four dictionaries). The `data-lang-only` gating hook stays in `applyDict()`
    but no element uses it now.
  - **Bio**: "she writes songs in Russian" removed in EN / RU / RO and from the static
    `index.html` fallback (UA already lacked it). EN "the Russian romance" reverted to
    "the romance tradition". Everything else in the bio is unchanged.
  - **`_redirects` added.** Pages serves the repo root as-is, so `dshenmusic.com/CONTENT.md`
    (which names the legal identity), `HANDOFF.md`, `BUILD.md`, `CLAUDE.md`, `DESIGN.md`,
    `README.md`, `PHOTOS.md` and the whole `design_handoff_dshen_site/` were **publicly
    fetchable and returning 200**. They now 302 to `/`. Add a rule for every new doc.
  - Internal docs (`CONTENT.md`, `DESIGN.md`, this file) had their Yandex link and
    language-of-the-lyrics lines scrubbed too, so nobody re-adds them from the notes.
  - **The four site languages stay as they are** — RU remains a UI language (owner's call).
  - **Not fixable from this repo, owner must handle:** the `band.link/dshen_*` hubs are
    generated from the distributor's feed and may still list Yandex Music / VK Music —
    check and hide those rows in the band.link dashboard. Same for the distributor's own
    artist pages. "Silver Age poetry" was **kept** in the bio (a poetry era, not a state
    reference) — say the word if that should go too.
- **2026-07-18** — Song/album titles are **translated per language** (was: keep Russian
  everywhere). Native quote glyphs per language. The "non-actress" title is stylized
  **camelCase in all langs**. `«Часы»` → “The Clock” (clock sense). Single stays “NonActress”.
  Singles link to **band.link** hubs. Videos retitled; runtimes 0:45 / 0:27 confirmed.
  Presave wording per language approved. Footer icons → official Simple Icons.
- Engineering invariants still true: `img{height:auto}` is required (else the CLS
  width/height attrs pin box height and CSS `aspect-ratio` is ignored); `main.js` loads
  **before** the GSAP `<script>`s so menu/video/i18n aren't blocked if the GSAP CDN is slow.

## Next steps (suggested order)

1. Get **`ro.json` reviewed by a native Romanian speaker**; apply fixes to the live site.
   The question list is in `CONTENT.md` → "Open RO questions for whoever reads it".
2. **D'Shen** reviews `ua.json` + confirms the bio (all langs).
4. **Phase 2, ongoing:** keep expanding Live as material arrives (the aftermovie landed
   2026-08-10); add a video-loop hero if a proper loop is produced.
5. Housekeeping: `build/production-site` is fully merged into `main` — safe to delete
   locally and on the remote.
