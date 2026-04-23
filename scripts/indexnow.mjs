#!/usr/bin/env node
// IndexNow ping — notifies Bing, Yandex, Seznam, and Naver (shared endpoint)
// on each production deploy.
//
// Runs as a `postbuild` hook. Guards so it only fires on Vercel production:
//   - Local `npm run build`            → skipped
//   - Vercel preview/development       → skipped
//   - Vercel production                → pings
//   - Manual (`--force` flag)          → pings regardless
//
// The verification key lives at /public/{key}.txt. The filename IS the key;
// the file's contents must equal the key. Bing fetches this URL to verify
// that whoever is pinging controls this domain. The same key can be reused
// across multiple sites on the same Bing Webmaster Tools account.
//
// Docs: https://www.bing.com/indexnow

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const HOST = 'clearly.design';
const ORIGIN = `https://${HOST}`;
const PUBLIC_DIR = 'public';

const force = process.argv.includes('--force');

if (!force && process.env.VERCEL_ENV !== 'production') {
  const env = process.env.VERCEL_ENV ?? '<unset>';
  console.log(
    `[indexnow] VERCEL_ENV=${env}, skipping. Pass --force to submit anyway.`,
  );
  process.exit(0);
}

// Locate the key file in public/ (first hex-named .txt wins).
const keyFile = readdirSync(PUBLIC_DIR).find((f) =>
  /^[a-f0-9]{16,128}\.txt$/i.test(f),
);
if (!keyFile) {
  console.warn(
    '[indexnow] No hex-named .txt key file found in public/. Skipping.',
  );
  process.exit(0);
}

const key = keyFile.replace(/\.txt$/i, '');
const fileContents = readFileSync(join(PUBLIC_DIR, keyFile), 'utf8').trim();
if (fileContents !== key) {
  console.error(
    `[indexnow] Key file ${keyFile} contents do not match its filename. Aborting.`,
  );
  process.exit(1);
}

// Collect URLs — mirrors src/pages/api/sitemap.js so the two stay consistent.
const scanSlugs = (dir, ext) =>
  existsSync(dir)
    ? readdirSync(dir)
        .filter((f) => f.endsWith(ext) && !f.startsWith('draft-'))
        .map((f) => f.slice(0, -ext.length))
    : [];

const staticRoutes = [
  '/',
  '/articles',
  '/resources',
  '/projects',
  '/case-studies',
];

const articleSlugs = scanSlugs('src/articles', '.mdx');
const caseStudySlugs = scanSlugs('src/case-studies', '.mdx');
const projectSlugs = scanSlugs('src/projects', '.md');
const resourceSlugs = scanSlugs('src/resources', '.mdx');

// Series config is an ES module with `slug: "..."` entries. Parse it as text
// to avoid pulling in a transpiler for a standalone Node script.
let seriesSlugs = [];
const seriesConfigPath = 'src/config/series.js';
if (existsSync(seriesConfigPath)) {
  const seriesText = readFileSync(seriesConfigPath, 'utf8');
  seriesSlugs = Array.from(
    seriesText.matchAll(/slug:\s*["']([a-z0-9-]+)["']/gi),
    (m) => m[1],
  );
}

const urlList = [
  ...staticRoutes,
  ...articleSlugs.map((s) => `/articles/${s}`),
  ...caseStudySlugs.map((s) => `/case-studies/${s}`),
  ...projectSlugs.map((s) => `/projects/${s}`),
  ...resourceSlugs.map((s) => `/resources/${s}`),
  ...seriesSlugs.map((s) => `/series/${s}`),
].map((p) => `${ORIGIN}${p}`);

console.log(`[indexnow] Submitting ${urlList.length} URLs to IndexNow:`);
for (const u of urlList) console.log(`  ${u}`);

const body = {
  host: HOST,
  key,
  keyLocation: `${ORIGIN}/${keyFile}`,
  urlList,
};

try {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });
  if (res.status === 200 || res.status === 202) {
    console.log(`[indexnow] Success (HTTP ${res.status}).`);
  } else {
    const text = await res.text().catch(() => '');
    console.warn(
      `[indexnow] Non-success HTTP ${res.status}: ${text.slice(0, 500)}`,
    );
  }
} catch (err) {
  console.error('[indexnow] Request failed:', err);
  // Never fail the deploy over a notification ping.
}
