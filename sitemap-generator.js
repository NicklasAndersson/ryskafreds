const fs = require('fs');
const { news } = require('./dist/data/newsData.js');
const { programs } = require('./dist/data/programData.js');

const domain = 'https://www.ryskafreds.se';

const staticRoutes = [
  '/',
  '/integritetspolicy',
  '/anvandarvillkor',
  '/cookies',
];

const newsRoutes = news.map(article => `/nyheter/${article.slug}`);
const programRoutes = programs.map(program => `/program/${program.slug}`);

const allRoutes = [...staticRoutes, ...newsRoutes, ...programRoutes];

const sitemap = `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allRoutes.map(route => `
      <url>
        <loc>${domain}${route}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
    `).join('')}
  </urlset>
`;

fs.writeFileSync('./public/sitemap.xml', sitemap);

console.log('Sitemap generated successfully!');
