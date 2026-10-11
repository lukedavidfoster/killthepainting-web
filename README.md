# Kill the Painting

The landing site for the film. One page, fully static, deployed on Vercel.

## Run it

```bash
npm install
npm run dev
```

The site runs at <http://localhost:3000>.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Build the production site. |
| `npm run typecheck` | Check the types. |
| `npm run lint` | Lint the code. |
| `npm run format` | Format the code. |

## Where the content lives

Everything the site says about the film is in one file: `src/content/film.ts`.
Change the copy, the credits, the screening dates, and the links there. Do not
edit the page components for a copy change.

Values marked `TODO` are placeholders. The page hides a section whose content
is still empty, so the site stays presentable while the material arrives.

## Where the images go

Put image files in `public/images/`. The page detects each file and uses it as
soon as it is present. No code change is needed.

| File | What it is | Size |
| --- | --- | --- |
| `public/images/title-treatment.png` | The designed title lockup, transparent background | supplied |
| `public/images/hero.jpg` | The full-bleed frame behind the title | supplied |
| `public/images/about.jpg` | The frame behind the trailer play button | 1920x1080 or more |
| `public/images/poster.jpg` | Key art, 2:3 | 1200x1800 or more |
| `public/images/laurels/*.png` | One file per festival laurel, transparent | 300px wide or more |
| `public/press-kit.pdf` | The press kit | — |

Compress each image before you commit it. The hero frame should be under
400 KB. Until a still from the film is supplied for `about.jpg`, the trailer
shows YouTube's own poster frame.

## What we still need

See [TODO.md](TODO.md).

## Deployment

Vercel builds every push. A push to `main` goes to production. A pull request
gets its own preview URL.

GitHub Actions runs the format check, the lint, the types, and the build on
every pull request. Both checks must pass before a merge.

### First-time Vercel setup

1. Import this repository into the Vercel project.
2. Keep the detected framework preset, Next.js. No build settings need
   changing, and the site uses no environment variables.
3. Add the domain under the project's Domains tab, and point the registrar's
   nameservers or records at Vercel.
4. Set `siteUrl` in `src/content/film.ts` to the live origin. The share cards,
   the sitemap, and the structured data all read it.
5. Turn on Vercel Analytics if you want traffic figures.

## How the page is built

- Next.js App Router, TypeScript, Tailwind. Every route is prerendered.
- The trailer is a facade. The YouTube iframe mounts only when a visitor
  presses play, so the page does not load third-party scripts up front.
- `src/app/opengraph-image.tsx` draws the share card at build time.
- `src/lib/jsonld.ts` emits `schema.org/Movie` structured data. Keep it in
  step with the content file.
