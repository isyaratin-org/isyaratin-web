import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ISYARATIN - Asisten Komunikasi Bahasa Isyarat AI",
    short_name: "ISYARATIN",
    description:
      "Aplikasi berbasis AI yang menjembatani komunikasi dua arah antara penyandang tunarungu dan masyarakat melalui penerjemahan bahasa isyarat ke teks/suara serta teks/suara ke avatar bahasa isyarat 3D.",
    start_url: "/",
    display: "standalone",
    background_color: "#F3F8F8",
    theme_color: "#156669",
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
