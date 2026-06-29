const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// Simula datos obtenidos desde una base de datos o CMS
const routes = [
  { path: "/", priority: 1.0, changefreq: "monthly" },
  { path: "/blog", priority: 0.8, changefreq: "weekly" },
  { path: "/blog/optimizar-imagenes-nextjs", priority: 0.5, changefreq: "monthly" },
  { path: "/blog/meta-tags-open-graph-seo", priority: 0.5, changefreq: "monthly" },
  { path: "/blog/sitemaps-dinamicos-indexacion", priority: 0.5, changefreq: "monthly" },
  { path: "/blog/lazy-loading-code-splitting", priority: 0.5, changefreq: "monthly" },
  { path: "/contacto", priority: 0.6, changefreq: "monthly" },
];

export async function GET() {
  const urlset = routes
    .map(
      (route) => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
