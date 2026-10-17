import React from "react";
import { appConfig } from "@/config/appConfig";

export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://isyaratin.com";

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: appConfig.name,
    alternateName: "Isyaratin AI",
    url: siteUrl,
    description: appConfig.shortDescription,
    inLanguage: "id-ID",
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: appConfig.name,
    operatingSystem: "Android",
    applicationCategory: "CommunicationApplication",
    description: appConfig.shortDescription,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "IDR",
    },
    url: siteUrl,
    featureList: appConfig.features.map(
      (feature) => `${feature.title} - ${feature.description}`
    ),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: appConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: appConfig.name,
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
    sameAs: appConfig.contact.repoUrl ? [appConfig.contact.repoUrl] : [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
