# WeGuide · CPF Future Careers Forum 2026

A 16:9 slide deck built with Next.js, React and Tailwind, using WeGuide branding.

**Live:** https://ramasleiman.github.io/weguide-cpf/

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Presenting

| Input | Action |
| --- | --- |
| → / Space / PageDown, or tap / swipe left | Next slide |
| ← / PageUp, or swipe right | Previous slide |
| Home / End | First / last slide |
| F | Toggle fullscreen |

Each slide has its own URL (`/#7` opens slide 7).

## Editing

- Slide order: `src/components/slides/index.ts`
- Slides: `src/components/slides/s01-intro.tsx` … `s09-closing.tsx`
- Shared layout (frame, title, logo): `src/components/slides/ui.tsx`
- Animations: `src/app/globals.css`

Pushing to `main` redeploys the live site automatically (GitHub Actions → GitHub Pages).

## QR code

The printed QR code (files in `print/`) points to **https://ramasleiman.github.io/weguide-cpf/qr/**, a redirect page, not to the deck directly. That means the QR destination can change without reprinting:

1. Open `public/qr/index.html`.
2. Replace the URL in the three places marked `TARGET` (and the fallback link).
3. Commit and push. Every printed QR code follows the new destination in about a minute.

Keep this repository and its name unchanged, or the printed QR codes will stop working.
