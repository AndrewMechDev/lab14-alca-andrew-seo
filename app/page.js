import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import("../components/LargeComponent")
);

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center gap-8 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Bienvenido — Imagen optimizada
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Esta imagen se carga con next/image y se sirve en WebP automáticamente.
          </p>
        </div>

        <Image
          src="/images/seo-image.png"
          width={800}
          height={400}
          alt="Ejemplo de imagen optimizada con next/image"
          priority
          className="rounded-lg shadow-md"
        />

        <DynamicComponent />
      </main>
    </div>
  );
}
