How to add real tool logos to the site

This project expects tool logos to live in `public/tools/` with filenames matching slugs used by the `ToolsGrid` component.

1) Preferred approach (recommended)

- Put your logo files into a local folder, for example `~/downloads/tool-uploads/`.
- Filenames should include the slug, e.g. `figma.png`, `webflow.svg`, or `logo-figma.png`. The script will do a case-insensitive match.
- Run the helper script from the project root:

  ```bash
  node scripts/prepare-tools-logos.js ~/downloads/tool-uploads
  ```

- The script will copy matched files to `public/tools/{slug}.{ext}`.

2) Manual approach

- Simply copy each logo into `public/tools/` and name files like `figma.png`, `webflow.svg`, etc.
- Supported extensions: `.png`, `.svg`, `.jpg`, `.jpeg`, `.webp`, `.gif`.

3) Filename list (expected slugs)

The following slugs are used by the grid component. Copy logos matching these names:

- dribbble, hubspot, wordpress, figma, illustrator, shopify, photoshop, elementor,
- xd, framer, webflow, woo, sketch, indesign, react, canva, zapier, google, vimeo, lottie,
- aftereffects, intercom, notion, typeform, vercel, netlify, stripe, airtable, sentry, mixpanel, webpack, storybook,
- tailwind, radix, framermotion, gatsby, next, sanity, amplitude

4) After copying

- Run your dev server and refresh the page:

  ```bash
  npm run dev
  ```

- The grid will try `.png` first then `.svg` fallback (or whichever extension you provided). If no logo is found for a slug it shows a letter fallback.

If you want, upload a zip of your logos and I can prepare them and place them in `public/tools/` for you (or instruct how to), or I can add a small UI toggle to preview logos before committing them.