import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { appConfig } from "@/config/appConfig";
import StructuredData from "@/components/StructuredData";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://isyaratin.com";

export const viewport: Viewport = {
  themeColor: "#156669",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ISYARATIN - Asisten Komunikasi Dua Arah Bahasa Isyarat AI & Avatar 3D",
    template: "%s | ISYARATIN",
  },
  description:
    "Aplikasi berbasis AI yang menjembatani komunikasi dua arah antara penyandang tunarungu dan masyarakat melalui penerjemahan bahasa isyarat ke teks/suara serta ucapan ke avatar bahasa isyarat 3D di Android.",
  keywords: [
    "Isyaratin",
    "isyaratin.com",
    "bahasa isyarat",
    "aplikasi bahasa isyarat",
    "penerjemah bahasa isyarat AI",
    "avatar 3D isyarat",
    "komunikasi tunarungu",
    "Bisindo AI",
    "bahasa isyarat indonesia",
    "teman tuli",
    "download APK Isyaratin",
    "aksesibilitas inklusif",
    "sign language translator Indonesia",
    "komunikasi dua arah disabilitas",
    "aplikasi tunarungu Android",
  ],
  authors: [{ name: "Tim Pengembang Isyaratin", url: siteUrl }],
  creator: "Isyaratin Team",
  publisher: "ISYARATIN",
  applicationName: appConfig.name,
  category: "technology",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ISYARATIN - Asisten Komunikasi Dua Arah Bahasa Isyarat Berbasis AI",
    description:
      "Menjembatani teman Tuli dan masyarakat luas lewat penerjemahan pintar gerakan bahasa isyarat ke suara/teks serta suara ke gerakan avatar 3D interaktif.",
    url: "/",
    siteName: "ISYARATIN",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ISYARATIN - Asisten Komunikasi Dua Arah Bahasa Isyarat AI & Avatar 3D",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISYARATIN - Asisten Komunikasi Dua Arah Bahasa Isyarat AI",
    description:
      "Menjembatani Komunikasi, Mewujudkan Inklusi. Unduh installer APK resmi Isyaratin untuk Android sekarang.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "ID",
    "geo.placename": "Indonesia",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} font-sans scroll-smooth`}>
      <head>
        <StructuredData />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-[#F3F8F8] text-[#0D2E30] antialiased selection:bg-[#C9ECEB] selection:text-[#0A3638]"
      >
        {children}
      </body>
    </html>
  );
}
