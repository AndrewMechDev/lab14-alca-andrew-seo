export const metadata = {
  title: "Contacto",
  description:
    "Comunícate con nosotros para consultas sobre optimización SEO, desarrollo web con Next.js y proyectos de rendimiento.",
  keywords: ["contacto", "SEO", "Next.js", "consultoría"],
  openGraph: {
    title: "Contacto | Mi Sitio Optimizado",
    description:
      "Comunícate con nosotros para consultas sobre optimización SEO, desarrollo web con Next.js y proyectos.",
    url: "/contacto",
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

export default function ContactoPage() {
  return (
    <div className="flex-1 bg-zinc-50 dark:bg-black">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
        {/* Header */}
        <div className="mb-12 text-center sm:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            Contacto
          </h1>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
            ¿Tienes un proyecto en mente? Escríbenos y te ayudamos a
            optimizar tu sitio web.
          </p>
        </div>

        {/* Información de contacto */}
        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          {[
            {
              label: "Email",
              value: "hola@mi-sitio.com",
              icon: (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              ),
            },
            {
              label: "Ubicación",
              value: "Lima, Perú",
              icon: (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              ),
            },
            {
              label: "Disponibilidad",
              value: "Lun–Vie, 9:00–18:00",
              icon: (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-3 rounded-xl border border-zinc-200 bg-white p-6 text-center dark:border-zinc-800 dark:bg-zinc-900 sm:items-start sm:text-left"
            >
              <div className="text-blue-600 dark:text-blue-400">
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {item.label}
                </p>
                <p className="mt-1 font-semibold text-black dark:text-zinc-50">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Formulario de contacto */}
        <form
          className="rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900"
        >
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-zinc-50">
            Envíanos un mensaje
          </h2>

          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              placeholder="Tu nombre"
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-black placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:ring-blue-800"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              placeholder="correo@ejemplo.com"
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-black placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:ring-blue-800"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Cuéntanos sobre tu proyecto..."
              className="mt-1 w-full resize-none rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-black placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:ring-blue-800"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-2.5 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}
