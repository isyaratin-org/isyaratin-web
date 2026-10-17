import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://isyaratin.com";
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${siteUrl}/opengraph-image`,
        `${siteUrl}/icon.png`,
      ],
    },
  ];
}
