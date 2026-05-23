import { readdir, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const distDirUrl = new URL('../dist/', import.meta.url);
const distDir = fileURLToPath(distDirUrl);
const site = (process.env.SITE_URL || 'https://huaxiayimin.us').replace(/\/$/, '');

async function collectHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectHtmlFiles(fullPath));
    } else if (entry.isFile() && entry.name === 'index.html') {
      files.push(fullPath);
    }
  }

  return files;
}

const htmlFiles = await collectHtmlFiles(distDir);
const urls = htmlFiles
  .map((file) => {
    const path = relative(distDir, file).replace(/index\.html$/, '').replace(/\\/g, '/');
    return `${site}/${path}`.replace(/\/+$/, '/');
  })
  .sort((a, b) => a.localeCompare(b));

const now = new Date().toISOString();
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url>
    <loc>${url}</loc>
    <lastmod>${now}</lastmod>
  </url>`).join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${site}/sitemap.xml
`;

await writeFile(new URL('sitemap.xml', distDirUrl), sitemap);
await writeFile(new URL('robots.txt', distDirUrl), robots);
