# DESIGN.md — dshenmusic.com visual direction

## The one-line brief

A dark, elegant, **face-and-voice-forward** artist site: cinematic stills of Darina,
generous typography, restrained motion. Feels like a small theater, not a tech product.

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
theater actress and singer; the project has roots in stage performance, Russian
romance tradition and Silver Age poetry culture. The site can feel like velvet
curtains and stage light — through color and type, not through literal theater clipart.

## Color

Foundation: near-black stage darkness, warm — not pure #000.

- Background: `#0d0b0a` range (warm near-black)
- Text: `#f2ede6` range (warm off-white)
- Accent: derive from the album cover art once it's in `assets/`.
  Process: extract 2–3 dominant tones from the cover, pick ONE as the accent
  (links, CTA button, hover states). The presave/streaming CTA should be the
  single most visually distinct element on first viewport.
- Allowed: subtle warm gradient or grain/vignette on section backgrounds.
  Forbidden: pure-saturation neons, cold blue-grays.

## Typography

- Display: a high-contrast serif with presence — e.g. **Playfair Display** or
  **Cormorant Garamond** (both on Google Fonts, both with full Cyrillic — REQUIRED,
  site runs in EN/RU/RO/UA). Large sizes, tight leading, used for section titles
  and the D'SHEN wordmark treatment.
- Body: quiet humanist sans with Cyrillic — e.g. **Inter** or **Manrope**.
- Scale: hero display very large (clamp ~3rem → 7rem), body 1rem–1.125rem,
  generous whitespace. Type is a primary design element, not decoration.
- Subset fonts to latin+cyrillic; preload the display font.

## Hero — v1 (photo era, pre-video-loop)

Two candidate concepts — **build both as variants for the owner to choose**
(this decision is explicitly open; he wants options):

- **Concept A — The Face** (Adele-style): full-viewport portrait from the UNPLUGGED
  concert shoot, darkened edges, D'SHEN wordmark + album title + presave CTA
  overlaid. Photo eagerly loaded, subtle slow zoom (Ken Burns, ~20s, reduced-motion
  safe). Candidate frames (all vertical 2:3, mobile-first friendly):
  `assets/unplugged-2026-07-11/DSC09567.jpg` (top pick — intimate backlit close-up)
  or `DSC09398.jpg` (serene, symmetric). For a desktop-wide variant, the only
  landscape frame that works is `DSC09446.jpg` (full-band establishing). Full
  described catalog: `assets/unplugged-2026-07-11/PHOTOS.md`.
- **Concept B — The Cover**: album cover art as the hero centerpiece (promoting
  «Там и тогда» is the current #1 job), on a background derived from its palette,
  with release countdown/date + presave CTA. More campaign-poster, less personal.

Possible synthesis after choosing: A as hero, B as the opening of the Music section.

Phase 2 (later): replace/augment with a short muted video loop (10–15s, ≤5MB,
compressed via ffmpeg) — owner produces this; leave the hero component structured
so a `<video>` background can slot in without redesign.

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

1. **Hero** — see above. Nav: minimal top bar, wordmark left, section anchors +
   language switcher (EN/RU/RO/UA) right; collapses to burger on mobile.
2. **Music** — album block («Там и тогда», cover, release date, presave/streaming
   CTA) + track list (8 tracks, titles + durations, elegant table/rows) + the two
   released singles with their cover art linking out.
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
performing in Russian — theatrical, cinematic, sincere. Dark warm palette (near-black
background, warm off-white text, one accent color from album art), large high-contrast
serif display type with Cyrillic support, portrait-photography-forward like adele.com
but at an indie scale like mgzavrebi.com. Sections: full-viewport hero with portrait,
album promo with presave CTA for debut album «Там и тогда» (out July 24), track list,
video grid, about, live dates, contact/social footer. Elegant scroll-reveal motion,
no gimmicks. Mobile-first."
