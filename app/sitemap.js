const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const blogPosts = [
  { slug: "optimizar-imagenes-nextjs", updatedAt: "2026-06-29" },
  { slug: "meta-tags-open-graph-seo", updatedAt: "2026-06-28" },
  { slug: "sitemaps-dinamicos-indexacion", updatedAt: "2026-06-27" },
  { slug: "lazy-loading-code-splitting", updatedAt: "2026-06-26" },
];

export default async function sitemap() {
  const staticRoutes = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const blogRoutes = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes];
}
