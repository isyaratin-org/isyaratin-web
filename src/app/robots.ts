import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://isyaratin.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/", "/*.png$", "/*.jpg$", "/*.svg$", "/*.ico$"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
