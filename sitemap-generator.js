import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const domain = 'https://www.ryskafreds.se';

// Static routes that don't depend on dynamic data
const allRoutes = [
  '/',
  '/nyheter',
  '/integritetspolicy',
  '/anvandarvillkor',
  '/cookies',
];

try {
  if (!fs.existsSync('./public')) {
    fs.mkdirSync('./public', { recursive: true });
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${domain}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync('./public/sitemap.xml', sitemap);
  console.log('✓ Sitemap generated successfully at public/sitemap.xml');
} catch (error) {
  console.error('✗ Error generating sitemap:', error.message);
  // Don't fail the build if sitemap generation fails
  process.exit(0);
}
