export const metadata = {
  title: "Blog",
  description:
    "Artículos sobre optimización SEO, rendimiento web y mejores prácticas en Next.js para desarrolladores.",
  keywords: ["Next.js", "SEO", "blog", "optimización web", "rendimiento"],
  openGraph: {
    title: "Blog | Mi Sitio Optimizado",
    description:
      "Artículos sobre optimización SEO, rendimiento web y mejores prácticas en Next.js.",
    url: "/blog",
    images: [
      {
        url: "/images/seo-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

const posts = [
  {
    id: 1,
    title: "Cómo optimizar imágenes en Next.js con next/image",
    excerpt:
      "Aprende a usar el componente Image de Next.js para servir imágenes en WebP, lazy loading automático y reducción de peso.",
    date: "29 Jun 2026",
    readTime: "5 min",
    tags: ["Next.js", "Imágenes"],
  },
  {
    id: 2,
    title: "Meta Tags y Open Graph: la guía definitiva para SEO",
    excerpt:
      "Descubre cómo configurar title, description y Open Graph tags para que tus páginas destaquen en Google y redes sociales.",
    date: "28 Jun 2026",
    readTime: "7 min",
    tags: ["SEO", "Open Graph"],
  },
  {
    id: 3,
    title: "Sitemaps dinámicos: mejora la indexación de tu sitio",
    excerpt:
      "Genera sitemaps XML automáticos para ayudar a Google a descubrir y rankear todo tu contenido más rápido.",
    date: "27 Jun 2026",
    readTime: "4 min",
    tags: ["Sitemap", "SEO Técnico"],
  },
  {
    id: 4,
    title: "Lazy Loading y Code Splitting en Next.js App Router",
    excerpt:
      "Implementa next/dynamic para cargar solo lo necesario y mejorar la velocidad de tu aplicación significativamente.",
    date: "26 Jun 2026",
    readTime: "6 min",
    tags: ["Rendimiento", "Lazy Loading"],
  },
];

export default function BlogPage() {
  return (
    <div className="flex-1 bg-zinc-50 dark:bg-black">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
        {/* Header */}
        <div className="mb-12 text-center sm:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            Blog
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Artículos sobre optimización SEO, rendimiento web y mejores
            prácticas en Next.js.
          </p>
        </div>

        {/* Grid de posts */}
        <div className="grid gap-8 sm:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                <time>{post.date}</time>
                <span>&middot;</span>
                <span>{post.readTime} de lectura</span>
              </div>

              <h2 className="mt-3 text-xl font-semibold leading-7 text-black transition group-hover:text-blue-600 dark:text-zinc-50 dark:group-hover:text-blue-400">
                {post.title}
              </h2>

              <p className="mt-2 leading-7 text-zinc-600 dark:text-zinc-400">
                {post.excerpt}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
