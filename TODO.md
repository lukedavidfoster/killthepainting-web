# To do before launch

Nothing here blocks a deploy. The page hides or holds each item until it
arrives, so the site stays presentable while this list is worked through.

Unless a path says otherwise, every change is in
[`src/content/film.ts`](src/content/film.ts).

## Content

- [ ] **Set the contact email.** `links.contactEmail` is empty. While it is
      empty the contact section, its navigation entry, and the "Request a
      screener" link are all left off the page. Setting it publishes all
      three.

      Use a forwarding alias on the domain, such as
      `press@killthepainting.com`, rather than a personal address. The page
      is built for press, so the address will be scraped. Most registrars
      include forwarding at no cost.

- [ ] **Add the remaining credits:** producers, cinematographer, and
      composer. A credit whose name is still `TODO` is left off the page, so
      these three rows are hidden now.

- [ ] **Confirm the synopsis.** The present text is drafted from the design
      mockup, and it calls the character "an artist". He is Lenny the
      Painter. Rewrite it in your own words.

- [ ] **Add screening dates** as festivals confirm: date, venue, city, and
      the ticket link for each.

- [ ] **Add press quotes** once reviews are published.

## Images

Put each file in `public/images/`. The page detects the file and uses it, so
no code change is needed. Compress every image before you commit it.

- [ ] **`about.jpg`** — a still from the film, 16:9, 1920x1080 or more. This
      is the most visible gap. Without it the trailer shows YouTube's own
      poster frame, which is the same mural shot as the hero with the same
      title on it, so the top of the page carries that image twice. A studio
      or rooftop frame would contrast well.

- [ ] **`laurels/*.png`** — one transparent file per festival laurel, 300px
      wide or more. The laurel row is hidden while there are none.

- [ ] **`public/press-kit.pdf`** — the press kit. Until it is here the press
      section says the materials are being prepared.

- [ ] **A square source image**, 512px or larger, for the browser icon.

## Deployment

- [ ] **Import the repository into Vercel.** Keep the detected framework
      preset, Next.js. The site uses no environment variables.

- [ ] **Point `killthepainting.com` at Vercel.** Add the domain under the
      project's Domains tab, then update the registrar.

- [ ] **Turn on Vercel Analytics**, if you want traffic figures.

## Worth considering

- [ ] Offer the other two posters in the press section. All three are 2:3 and
      press often wants a choice. Only the blank-canvas poster is in the
      repository now.

- [ ] Supply a higher-resolution hero frame if one exists. The current file is
      2800px wide, which is enough for a retina desktop but leaves no margin.
