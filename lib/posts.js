// Simula datos obtenidos desde una base de datos o CMS.
// En producción, esto podría ser: fetch(api), Prisma, SQL query, etc.

export const posts = [
  {
    slug: "optimizar-imagenes-nextjs",
    title: "Cómo optimizar imágenes en Next.js con next/image",
    updatedAt: "2026-06-29",
  },
  {
    slug: "meta-tags-open-graph-seo",
    title: "Meta Tags y Open Graph: la guía definitiva para SEO",
    updatedAt: "2026-06-28",
  },
  {
    slug: "sitemaps-dinamicos-indexacion",
    title: "Sitemaps dinámicos: mejora la indexación de tu sitio",
    updatedAt: "2026-06-27",
  },
  {
    slug: "lazy-loading-code-splitting",
    title: "Lazy Loading y Code Splitting en Next.js App Router",
    updatedAt: "2026-06-26",
  },
];

export const staticRoutes = [
  { path: "/", priority: 1.0, changefreq: "monthly" },
  { path: "/blog", priority: 0.8, changefreq: "weekly" },
  { path: "/contacto", priority: 0.6, changefreq: "monthly" },
];
