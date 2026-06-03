# Heritage Vault — marketing website

The market-facing site for **Heritage Vault**, the estate-planning platform built by Heritage Strategies LLC. Multi-tenant SaaS for the firms that serve high-net-worth and ultra-high-net-worth families.

Heritage Vault digitizes the "Approach Book" methodology Heritage Strategies has produced by hand since 2009. The platform collapses 20 to 40 hours of manual estate-plan production into under two.

## Stack

- [Astro 5](https://astro.build) — content-first static site generator
- [Tailwind CSS 3](https://tailwindcss.com) — utility-first styling, brand tokens only
- TypeScript (strict)
- MDX for editorial content
- GitHub Pages deployment via Actions

## Local development

```sh
npm install
npm run dev          # http://localhost:4321
npm run build        # outputs to dist/
npm run preview      # serve the production build locally
```

## Brand discipline

Color, typography, mark, and voice are governed by the Heritage brand prompt. Strict rules:

- **Real logo file only.** `public/heritage-logo.webp` is the canonical lockup. Never recreated as inline SVG.
- **No copper, no orange, no red anywhere outside the logo file.** The wax-seal red lives inside `heritage-logo.webp` and stops there.
- **Cool near-white page background** (`#F5F8FC`). Heritage Navy `#1E2A44` and Contrast Dark `#0F1626` are panel insets only, never the page default.
- **Aged Bronze `#8C7351`** is a 1px structural hairline only — top of page, bottom of page, beneath nav, beneath table headers. Never a button fill, never a chart series.
- **Source Serif 4** display, **Inter** UI/body, **JetBrains Mono** for IDs. Three families, no exceptions.
- **Buttons are 4px-radius rectangles**, never pills. Filled navy primary, navy-outlined secondary, ghost tertiary.
- **No em dashes anywhere in body copy.**
- **Tabular figures** (`font-variant-numeric: tabular-nums`) on every number in a table or amount.
- **Numbers are static, never animated.** No counter widgets.
- **One motion in the system: the continuous wave.** Behind the hero panel only.

See `/Users/supernal/Downloads/heritage-brand-prompt.md` for the full system.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.

Production URL: <https://svenboettger-supernal.github.io/heritage-vault-website/>

## License

Proprietary. © Heritage Strategies LLC / Heritage Vault.
