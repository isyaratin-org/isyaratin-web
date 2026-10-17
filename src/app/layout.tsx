import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: "#156669",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "ISYARATIN - Asisten Komunikasi Dua Arah Bahasa Isyarat Berbasis AI",
  description:
    "Aplikasi berbasis AI yang menjembatani komunikasi dua arah antara penyandang tunarungu dan masyarakat melalui penerjemahan bahasa isyarat ke teks/suara serta teks/suara ke avatar bahasa isyarat 3D.",
  keywords: [
    "Isyaratin",
    "bahasa isyarat",
    "avatar 3D isyarat",
    "aplikasi bahasa isyarat",
    "AI bahasa isyarat",
    "download APK Isyaratin",
    "komunikasi dua arah tunarungu",
    "aksesibilitas inklusif",
  ],
  authors: [{ name: "Tim Isyaratin" }],
  openGraph: {
    title: "ISYARATIN: AI-Powered Two-Way Sign Language Communication Assistant",
    description:
      "Aplikasi berbasis AI yang menjembatani komunikasi dua arah antara penyandang tunarungu dan masyarakat melalui penerjemahan bahasa isyarat ke teks/suara serta teks/suara ke avatar bahasa isyarat 3D.",
    url: "https://isyaratin.id",
    siteName: "Isyaratin",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISYARATIN - Asisten Komunikasi Dua Arah Bahasa Isyarat",
    description:
      "Menjembatani Komunikasi, Mewujudkan Inklusi. Unduh installer APK resmi Isyaratin untuk Android sekarang.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} font-sans scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#F3F8F8] text-[#0D2E30] antialiased selection:bg-[#C9ECEB] selection:text-[#0A3638]">
        {children}
      </body>
    </html>
  );
}
