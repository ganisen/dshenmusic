# dshenmusic.com

Official website of **D'Shen** — https://dshenmusic.com

Static single-page site. Vanilla HTML/CSS/JS + GSAP. No build step.

**Status:** built & multilingual (EN live; RU/RO/UA first drafts) on branch
`build/production-site`; not yet merged to `main`. Current state + next steps → `HANDOFF.md`.

## Deploy

Push to `main` → Cloudflare Pages auto-deploys to production (~1 min).
Other branches → automatic preview deployments at `*.dshenmusic.pages.dev`.

## Structure

```
index.html      — the page
style.css       — all styles
main.js         — i18n switcher, GSAP animations, embeds
i18n/           — en.json / ru.json / ro.json / ua.json (all display copy)
assets/         — images (optimized); assets/src/ for originals
CLAUDE.md       — project context & rules for AI agents (read first)
HANDOFF.md      — current state + next steps (read after CLAUDE.md)
DESIGN.md       — visual direction
CONTENT.md      — canonical copy, links, asset inventory
BUILD.md        — historical build brief (build is complete)
```

## Working on it

1. Read `CLAUDE.md`.
2. Branch for anything experimental; `main` is production.
3. All display text goes through `i18n/*.json` — no hardcoded copy in HTML.

## Ops facts

- Domain: Porkbun (registrar) → Cloudflare (DNS + Pages hosting)
- Email: contact@dshenmusic.com → Porkbun forwarding (MX records in Cloudflare DNS)
- Cost: domain renewal only (~$11/yr)
