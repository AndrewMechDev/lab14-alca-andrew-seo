import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://tusitio.com"),
  title: {
    default: "Mi Sitio Optimizado",
    template: "%s | Mi Sitio Optimizado",
  },
  description: "Aprende sobre optimización SEO y rendimiento en Next.js.",
  keywords: ["Next.js", "SEO", "optimización web"],
  openGraph: {
    title: "Mi Sitio Optimizado",
    description: "Descubre técnicas avanzadas para mejorar tu web con Next.js.",
    url: "https://tusitio.com",
    siteName: "Mi Sitio Optimizado",
    images: [
      {
        url: "/images/seo-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Sitio Optimizado",
    description: "Descubre técnicas avanzadas para mejorar tu web con Next.js.",
    images: ["/images/seo-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${inter.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
