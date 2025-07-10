import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const articlesDir = path.join(process.cwd(), 'src/articles');
  const files = fs.readdirSync(articlesDir);
  const urls = files
    .filter(file => file.endsWith('.mdx') && !file.startsWith("draft-"))
    .map(file => {
      const slug = file.replace(/\.mdx$/, '');
      return `<url><loc>https://clearly.design/articles/${slug}</loc></url>`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n    <url><loc>https://clearly.design/</loc></url>\n    ${urls.join('\n')}\n  </urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(sitemap);
} 