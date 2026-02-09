import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://www.fragmnt.app';
const BLOG_DIR = path.join(__dirname, '../src/content/blog');
const PUBLIC_DIR = path.join(__dirname, '../public');
const DIST_DIR = path.join(__dirname, '../dist');

// Pages to include in sitemap
const PAGES = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/demo', changefreq: 'weekly', priority: 0.9 },
    { url: '/exploration', changefreq: 'monthly', priority: 0.8 },
    { url: '/project', changefreq: 'monthly', priority: 0.8 },
    { url: '/follow', changefreq: 'monthly', priority: 0.8 },
    { url: '/blog', changefreq: 'weekly', priority: 0.7 },
];

function getBlogPosts() {
    if (!fs.existsSync(BLOG_DIR)) {
        return [];
    }

    const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.md'));

    return files.map(file => {
        const filePath = path.join(BLOG_DIR, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);
        const slug = data.slug || file.replace('.md', '');

        return {
            url: `/blog/${slug}`,
            changefreq: 'monthly',
            priority: 0.6,
            lastmod: data.date ? new Date(data.date).toISOString() : undefined
        };
    });
}

function generateSitemap() {
    const blogPosts = getBlogPosts();
    const allUrls = [...PAGES, ...blogPosts];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(page => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${page.lastmod ? `\n    <lastmod>${page.lastmod}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>`;

    // Write to public folder (for dev) and dist folder (for prod if it exists)
    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
    console.log('✅ Sitemap generated in public/sitemap.xml');

    if (fs.existsSync(DIST_DIR)) {
        fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemap);
        console.log('✅ Sitemap generated in dist/sitemap.xml');
    }
}

generateSitemap();
