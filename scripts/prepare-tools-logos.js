#!/usr/bin/env node
// Usage: node scripts/prepare-tools-logos.js <path-to-upload-folder>
// The script searches the supplied folder for logo files that match expected slugs
// (case-insensitive) and copies them to `public/tools/{slug}.{ext}`.

const fs = require('fs');
const path = require('path');

const expectedSlugs = [
  'dribbble','hubspot','wordpress','figma','illustrator','shopify','photoshop','elementor',
  'xd','framer','webflow','woo','sketch','indesign','react','canva','zapier','google','vimeo','lottie',
  'aftereffects','intercom','notion','typeform','vercel','netlify','stripe','airtable','sentry','mixpanel','webpack','storybook',
  'tailwind','radix','framermotion','gatsby','next','sanity','amplitude'
];

const validExts = ['.png', '.svg', '.jpg', '.jpeg', '.webp', '.gif'];

function usage() {
  console.log('Usage: node scripts/prepare-tools-logos.js <path-to-upload-folder>');
  process.exit(1);
}

const inputDir = process.argv[2];
if (!inputDir) usage();

const fromDir = path.resolve(process.cwd(), inputDir);
const toDir = path.resolve(process.cwd(), 'public', 'tools');
if (!fs.existsSync(fromDir)) {
  console.error('Input folder does not exist:', fromDir);
  process.exit(1);
}
if (!fs.existsSync(toDir)) fs.mkdirSync(toDir, { recursive: true });

const files = fs.readdirSync(fromDir);

function findFileForSlug(slug) {
  const lower = slug.toLowerCase();
  // Look for files where filename (without ext) includes the slug or equals the slug
  for (const f of files) {
    const ext = path.extname(f).toLowerCase();
    if (!validExts.includes(ext)) continue;
    const name = path.basename(f, ext).toLowerCase();
    if (name === lower || name.includes(lower) || lower.includes(name)) return f;
  }
  return null;
}

let copied = 0; let missing = [];
for (const slug of expectedSlugs) {
  const match = findFileForSlug(slug);
  if (match) {
    const src = path.join(fromDir, match);
    const ext = path.extname(match).toLowerCase();
    const dest = path.join(toDir, `${slug}${ext}`);
    fs.copyFileSync(src, dest);
    console.log(`Copied: ${match} -> public/tools/${slug}${ext}`);
    copied++;
  } else {
    missing.push(slug);
  }
}

console.log(`\nDone. Copied ${copied} logos.`);
if (missing.length) {
  console.log('Missing or not found for slugs:', missing.join(', '));
  console.log('\nTip: put your logo files in the upload folder and include the slug in the file name, e.g. figma.png or logo-figma.svg');
}

process.exit(0);
