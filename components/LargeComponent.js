export default function LargeComponent() {
  return (
    <div className="w-full p-6 rounded-lg border border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900">
      <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
        Componente cargado dinámicamente
      </h2>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Este componente se cargó usando Lazy Loading con next/dynamic.
      </p>
    </div>
  );
}
