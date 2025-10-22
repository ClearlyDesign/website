import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Get articles
  const articlesDir = path.join(process.cwd(), 'src/articles');
  const articleFiles = fs.readdirSync(articlesDir);
  const articleUrls = articleFiles
    .filter(file => file.endsWith('.mdx') && !file.startsWith("draft-"))
    .map(file => {
      const slug = file.replace(/\.mdx$/, '');
      return `<url><loc>https://clearly.design/articles/${slug}</loc></url>`;
    });

  // Get projects
  const projectsDir = path.join(process.cwd(), 'src/projects');
  const projectFiles = fs.readdirSync(projectsDir);
  const projectUrls = projectFiles
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const slug = file.replace(/\.md$/, '');
      return `<url><loc>https://clearly.design/projects/${slug}</loc></url>`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n    <url><loc>https://clearly.design/</loc></url>\n    <url><loc>https://clearly.design/projects</loc></url>\n    ${projectUrls.join('\n    ')}\n    ${articleUrls.join('\n    ')}\n  </urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(sitemap);
} 