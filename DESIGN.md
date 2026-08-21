# DESIGN.md — dshenmusic.com visual direction

## The one-line brief

A dark, elegant, **face-and-voice-forward** artist site: cinematic stills of Darina,
generous typography, restrained motion. Feels like a small theater, not a tech product.

> **Status: design finalized** (Claude Design → `design_handoff_dshen_site/`). That
> bundle's README is the canonical per-section build spec; this doc records the resolved
> decisions and the *why*. Where they ever disagree, the handoff README wins on specifics
> (exact px, copy), this doc wins on intent.

## References (in priority order)

1. **adele.com** — the north star. Face-focused, minimal chrome, the artist IS the
   design. We match the *attitude* (large portrait photography, quiet luxury,
   type-as-design), not the infrastructure (they have rich backend/video hosting;
   we don't need it).
2. **mgzavrebi.com** — realistic scale benchmark. This is "our level" of production:
   clean sections, photo-driven, straightforward. If a decision feels too ambitious,
   check whether mgzavrebi would do it.
3. **zolotoshow.ru** — achievable richness; good example of a Russian-language artist
   site that feels produced without a big backend.
4. **zazofficial.com** — aesthetic sensibility reference only (warmth, artistry,
   personality in the details). We have no merch; ignore the store patterns.
5. **coldplay.com** — the artist's personal favorite. Take: playfulness is allowed;
   the site can have one or two moments of delight (a hover surprise, a color moment).
   Do not take: their density and product sprawl.

## Mood words

Cinematic · intimate · theatrical · warm-dark · sincere. 
NOT: corporate, neon/cyber, template-y, aggressive, cluttered.

Context that should inform feel (not be literally illustrated): Darina is a trained
theater actress and singer; the project has roots in stage performance,
romance tradition and Silver Age poetry culture. The site can feel like velvet
curtains and stage light — through color and type, not through literal theater clipart.

## Color — FINAL (locked in Claude Design)

Foundation: near-black stage darkness, warm — not pure #000.

- Background `--bg`: **`#0d0b0a`** (warm near-black)
- Text `--text`: **`#f2ede6`** (warm off-white)
- Accent `--accent`: **`#E5A455`** (warm amber, pulled from the stage-light photography).
  Links, CTA, section labels, hover, active language. The presave CTA is the single most
  distinct element on first viewport. (Alternates explored + rejected: `#8FB3BA` teal,
  `#C99FA4` dusty rose.)
- Text-opacity ladder on `--text`: `.85` body-on-photo, `.82` nav, `.75/.7` secondary,
  `.55/.5` metadata, `.45` muted, `.4` copyright, `.38` inactive language. Hairlines
  `rgba(242,237,230,.14)` and `.09`.
- Selection: bg `rgba(229,164,85,.85)`, text `#0d0b0a`.
- **No border-radius** anywhere except 50% circles (video play button, social icons);
  buttons + cards are square-cornered.
- Allowed: subtle warm gradient / scrim / vignette. Forbidden: neons, cold blue-grays.

## Typography

**Single-font system — `Oswald`** (SIL OFL 1.1, free to self-host, no licence gate),
source masters in `assets/src/fonts/` (gitignored). Final direction as of **2026-07-18**:
one typeface across the whole site for gig-poster cohesion. See the *History / decision
trail* below for how this replaced the earlier two-font system.

- **`Oswald`** (`assets/src/fonts/oswald/`): a tall, condensed grotesque — the face
  already used for the secondary info on the Unplugged posters. Industrial poster
  typography, and now the site's **only** live font. Used everywhere: hero + all titles,
  nav, buttons/CTA, track list, dates, labels, captions, footer, and the bio. (The D'SHEN
  wordmark itself is the existing logo *artwork*, not live type.)
  - Glyphs verified: full 4-language coverage incl. Romanian ✓ (has `ț`).
  - Variable weight **200→700** (ExtraLight→Bold) + statics. Display text goes big on
    *size*; if large titles read a touch light, bump their weight (500–600) rather than
    adding a second face.
  - ↳ Tradeoff: Oswald is condensed and not humanist, so long running text can feel tight.
    The site has almost none (one ~120-word bio), so single-font poster cohesion wins — but
    if the bio reads cramped in testing, add a neutral humanist sans (Inter/Manrope) for
    body only. Ask the owner before introducing a 2nd font.

- **`Ambition & Ink` — artwork-only, not a webfont.** It stays the display font baked into
  the produced artwork (album + single covers, Unplugged posters, anything exported from
  Figma) and the owner is **not** re-fonting those. So the brand's original hand-lettered
  mark lives on in the images, while the *live* site type is the licence-clean Oswald — a
  deliberate contrast (hand-lettered artwork over rigid poster type), no longer a
  handwriting stand-in. Its source is kept in `assets/src/fonts/ambition-ink/` for reference /
  matching only — never deployed as a webfont (commercial licence + it lacks Romanian `ț`).

- **History / decision trail:** the original build shipped a **two-font** system — `Caveat`
  (a warm brush-marker handwriting face) for the hero + titles, against `Oswald` for
  everything else. On 2026-07-18 the handwriting face was first swapped `Caveat → Lora` (an
  elegant serif), then the owner decided to drop the separate display font entirely and run
  **Oswald alone**. Caveat was removed from the build; **Lora is kept dormant** — its
  `@font-face` and `assets/fonts/lora-var.woff2` stay in the repo so restoring a serif
  display font is a one-line change (`--font-display:"Lora", Georgia, serif` + re-preload).
  The earlier "hand-lettered warmth" direction is retired in favour of one rigid poster
  grotesque; the Adele/mgzavrebi references still hold for *attitude*, not literal type.

- Scale: hero display very large (clamp ~3rem → 7rem), body 1rem–1.125rem, generous
  whitespace. Type is a primary design element, not decoration.

- **Delivery — DONE (self-hosted, no Google Fonts CDN request).** Subset **variable**
  `woff2` (latin + latin-ext + cyrillic; all 4 languages verified) live in `assets/fonts/`:
  - `oswald-var.woff2` — ~50 KB, variable `wght 200→700` — **the live font; preload this**
  - `lora-var.woff2` — ~84 KB, variable `wght 400→700` — dormant (see *History* above)
  - `OFL-Oswald.txt`, `OFL-Lora.txt` — licences ship alongside (OFL requirement)

  `@font-face` for the build (one file per family covers all weights):
  ```css
  @font-face{font-family:"Oswald";src:url("/assets/fonts/oswald-var.woff2") format("woff2");
    font-weight:200 700;font-style:normal;font-display:swap;}
  /* Lora kept dormant — see History / decision trail for the restore path */
  @font-face{font-family:"Lora";src:url("/assets/fonts/lora-var.woff2") format("woff2");
    font-weight:400 700;font-style:normal;font-display:swap;}
  ```
  Preload the live font in `<head>`:
  `<link rel="preload" href="/assets/fonts/oswald-var.woff2" as="font" type="font/woff2" crossorigin>`
  Roles: `--font-display` and `--font-ui` both resolve to **Oswald** (single-font build).
  ↳ Perf note: dropping the separate display font also dropped the heaviest asset — the
  build now self-hosts one ~50 KB font (Oswald), with Lora (~84 KB) present but never
  downloaded (no preload, no `font-family` reference).

## Hero — FINAL: Concept A "The Face" (portrait)

**Decided in Claude Design: Concept A wins; the album-cover Concept B was built and
rejected** (portrait is more personal — the face IS the design). Full-viewport portrait
`assets/unplugged-2026-07-11/DSC09567-2400.webp` — `object-fit:cover;
object-position:68% 38%` keeps her face in the upper area, clear of the text.
`min-height:100svh`, content aligned bottom-left.

- Ken Burns zoom: scale 1.02→1.1 over 26s, ease-in-out, infinite alternate,
  `transform-origin:68% 38%`. Disabled under `prefers-reduced-motion`.
- Scrim: `linear-gradient(180deg, rgba(13,11,10,.5) 0%, transparent 28%,
  rgba(13,11,10,.15) 55%, rgba(13,11,10,.93) 100%)`.
- Overlay (fade + 24px rise, 1s, .15s delay): white wordmark → H1
  `Debut album «Там и тогда»` → chip `OUT JULY 24 — IN {N} DAYS` (live countdown;
  → `OUT NOW` after release) → amber `PRESAVE THE ALBUM` CTA (soft pulse ring, hover lift).

Phase 2 (later): swap to a short muted video loop (10–15s, ≤5MB, ffmpeg) — keep the hero
structured so a `<video>` background slots in without redesign.

## Motion language (GSAP + ScrollTrigger)

Principle: **the site breathes; it does not perform tricks.**

- Section entrances: fade + rise (y: 24→0), 0.6–0.9s, ease `power2.out`, staggered
  children (0.08–0.12s). Once per section, no re-trigger on scroll-up.
- Hero: slow photo zoom OR subtle parallax (background moves at ~0.85x scroll).
- Text: section titles may reveal with a slight clip/rise. No letter-by-letter
  spinning, no 3D flips.
- Hover: link underline draws in; cards lift 2–4px with shadow softening.
- One "moment of delight" allowed (Coldplay clause): e.g. the accent color gently
  pulsing on the presave button, or a tasteful hover effect on the track list.
- Hard rules: no scroll-jacking, no autoplaying sound, everything honors
  `prefers-reduced-motion` (fall back to opacity-only or none), 60fps —
  animate transform/opacity only.

## Section-by-section sketch

> Superseded by the finalized per-section spec in `design_handoff_dshen_site/README.md`
> (build from that). Kept here for intent. **Biggest change from this sketch: the 8-track
> list was CUT from Music.** Final per-section photo picks: hero `DSC09567`, about
> `DSC09439` (3:4), live grid `DSC09446` + `DSC09476` + `DSC09505`.

1. **Hero** — see above. Nav: minimal top bar, wordmark left, section anchors +
   language switcher (EN/RU/RO/UA) right; collapses to burger on mobile.
2. **Music** — album block («Там и тогда», cover, release meta, countdown chip, presave
   CTA, streaming names) + the two released singles as cover cards linking out.
   **No track list** (cut in final).
3. **Video** — 2–4 YouTube embeds (facade pattern), grid on desktop, stack on mobile.
4. **About** — one strong portrait + bio text (per-language from i18n). Keep short;
   link personality, theater background, sincerity.
5. **Live** — upcoming shows list; when empty, a graceful "Follow for announcements"
   state pointing at Instagram. Past highlight (July 11 Chișinău concert) optional
   as a photo moment.
6. **Contact** — contact@dshenmusic.com (mailto), Instagram, and the full icon row:
   Spotify / Apple Music / YouTube / Deezer / Instagram. Footer: © D'Shen, year.

## Claude Design prompt (paste when generating concepts there)

"Design a single-page website for D'Shen, a female singer-songwriter from Chișinău
— theatrical, cinematic, sincere. Dark warm palette (near-black
background, warm off-white text, one accent color from album art), a single tall condensed
grotesque (Oswald) used throughout — hero, all titles, nav, labels, dates and body — for a
cohesive gig-poster feel, with Cyrillic support. Portrait-photography-forward like adele.com
but at an indie scale like mgzavrebi.com. Sections: full-viewport hero with portrait,
album promo with presave CTA for debut album «Там и тогда» (out July 24), track list,
video grid, about, live dates, contact/social footer. Elegant scroll-reveal motion,
no gimmicks. Mobile-first."
