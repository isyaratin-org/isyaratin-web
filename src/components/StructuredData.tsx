import React from "react";
import { appConfig } from "@/config/appConfig";

export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://isyaratin.com";

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Organization Entity
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: appConfig.name,
        legalName: "ISYARATIN Indonesia",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          "@id": `${siteUrl}/#logo`,
          url: `${siteUrl}/icon.png`,
          contentUrl: `${siteUrl}/icon.png`,
          caption: "Logo Resmi ISYARATIN",
          width: 512,
          height: 512,
        },
        image: {
          "@id": `${siteUrl}/#logo`,
        },
        description:
          "Pengembang teknologi kecerdasan buatan (AI) inklusif penerjemah bahasa isyarat dua arah untuk menjembatani komunikasi teman Tuli dan masyarakat.",
        email: appConfig.contact.email,
        sameAs: appConfig.contact.repoUrl ? [appConfig.contact.repoUrl] : [],
      },

      // 2. WebSite Entity
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: appConfig.name,
        alternateName: ["Isyaratin AI", "Isyaratin Web", "Aplikasi Isyaratin"],
        description: appConfig.shortDescription,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "id-ID",
      },

      // 3. WebPage Entity
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "ISYARATIN - Asisten Komunikasi Dua Arah Bahasa Isyarat AI & Avatar 3D",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#app`,
        },
        primaryImageOfPage: {
          "@id": `${siteUrl}/#logo`,
        },
        description: appConfig.shortDescription,
        inLanguage: "id-ID",
        breadcrumb: {
          "@id": `${siteUrl}/#breadcrumb`,
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "#fitur h2", "#faq h2"],
        },
      },

      // 4. BreadcrumbList
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: siteUrl,
          },
        ],
      },

      // 5. MobileApplication (Android APK)
      {
        "@type": "MobileApplication",
        "@id": `${siteUrl}/#app`,
        name: appConfig.name,
        operatingSystem: "Android 7.0+",
        applicationCategory: "CommunicationApplication",
        applicationSubCategory: "AccessibilityApplication",
        description: appConfig.shortDescription,
        url: siteUrl,
        installUrl: appConfig.apkDownloadUrl || `${siteUrl}/#unduh`,
        downloadUrl: appConfig.apkDownloadUrl || `${siteUrl}/#unduh`,
        fileFormat: "application/vnd.android.package-archive",
        fileSize: appConfig.fileSize || "173 MB",
        softwareVersion: appConfig.version || "v1.0",
        inLanguage: "id",
        countriesSupported: "ID",
        permissions: "android.permission.CAMERA, android.permission.RECORD_AUDIO",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
        },
        author: {
          "@id": `${siteUrl}/#organization`,
        },
        featureList: appConfig.features.map(
          (feature) => `${feature.title}: ${feature.description}`
        ),
      },

      // 6. FAQPage
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: appConfig.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
    />
  );
}
