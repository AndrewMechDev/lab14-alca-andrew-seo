import { posts, staticRoutes } from "@/lib/posts";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function GET() {
  // Construye todas las rutas desde la misma fuente de datos (CMS/DB)
  const allRoutes = [
    ...staticRoutes,
    ...posts.map((post) => ({
      path: `/blog/${post.slug}`,
      priority: 0.5,
      changefreq: "monthly",
    })),
  ];

  const urlset = allRoutes
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
