import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://reynoso-construction.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routing.locales.map((locale) => ({
    url:
      locale === routing.defaultLocale
        ? `${SITE_URL}/`
        : `${SITE_URL}/${locale}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: locale === routing.defaultLocale ? 1.0 : 0.9,
    alternates: {
      languages: {
        en: `${SITE_URL}/`,
        es: `${SITE_URL}/es`,
      },
    },
  }));
}
