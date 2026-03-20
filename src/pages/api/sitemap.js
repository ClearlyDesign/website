import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { seriesConfig } from '@/config/series';

function toISODate(dateStr) {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? null : d.toISOString().split('T')[0];
}

function urlEntry(loc, lastmod) {
  if (lastmod) {
    return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`;
  }
  return `<url><loc>${loc}</loc></url>`;
}

function readFrontmatter(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return matter(content).data;
}

export default function handler(req, res) {
  // Get articles with dates
  const articlesDir = path.join(process.cwd(), 'src/articles');
  const articleFiles = fs.readdirSync(articlesDir);
  const articleUrls = articleFiles
    .filter(file => file.endsWith('.mdx') && !file.startsWith("draft-"))
    .map(file => {
      const slug = file.replace(/\.mdx$/, '');
      const data = readFrontmatter(path.join(articlesDir, file));
      const lastmod = toISODate(data.lastUpdated || data.date);
      return urlEntry(`https://clearly.design/articles/${slug}`, lastmod);
    });

  // Get projects with dates
  const projectsDir = path.join(process.cwd(), 'src/projects');
  const projectFiles = fs.readdirSync(projectsDir);
  const projectUrls = projectFiles
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const slug = file.replace(/\.md$/, '');
      const data = readFrontmatter(path.join(projectsDir, file));
      const lastmod = toISODate(data.lastUpdated || data.date);
      return urlEntry(`https://clearly.design/projects/${slug}`, lastmod);
    });

  // Get case studies with dates
  const caseStudiesDir = path.join(process.cwd(), 'src/case-studies');
  const caseStudyFiles = fs.readdirSync(caseStudiesDir);
  const caseStudyUrls = caseStudyFiles
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const slug = file.replace(/\.mdx$/, '');
      const data = readFrontmatter(path.join(caseStudiesDir, file));
      const lastmod = toISODate(data.lastUpdated || data.date);
      return urlEntry(`https://clearly.design/case-studies/${slug}`, lastmod);
    });

  // Get resources (decision pages) with dates
  const resourcesDir = path.join(process.cwd(), 'src/resources');
  const resourceUrls = fs.existsSync(resourcesDir)
    ? fs.readdirSync(resourcesDir)
        .filter(file => file.endsWith('.mdx'))
        .map(file => {
          const slug = file.replace(/\.mdx$/, '');
          const data = readFrontmatter(path.join(resourcesDir, file));
          const lastmod = toISODate(data.lastUpdated || data.date);
          return urlEntry(`https://clearly.design/resources/${slug}`, lastmod);
        })
    : [];

  // Series pages
  const seriesUrls = Object.values(seriesConfig).map(series =>
    urlEntry(`https://clearly.design/series/${series.slug}`)
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlEntry('https://clearly.design/')}
  ${urlEntry('https://clearly.design/articles')}
  ${urlEntry('https://clearly.design/resources')}
  ${urlEntry('https://clearly.design/projects')}
  ${urlEntry('https://clearly.design/case-studies')}
  ${seriesUrls.join('\n  ')}
  ${projectUrls.join('\n  ')}
  ${caseStudyUrls.join('\n  ')}
  ${articleUrls.join('\n  ')}
  ${resourceUrls.join('\n  ')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(sitemap);
}
