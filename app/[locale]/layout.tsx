import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { StructuredData } from "@/components/StructuredData";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://reynoso-construction.vercel.app";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "meta" });

  const path = locale === routing.defaultLocale ? "" : `/${locale}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${SITE_URL}${path}`,
      languages: {
        en: `${SITE_URL}/`,
        es: `${SITE_URL}/es`,
        "x-default": `${SITE_URL}/`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_US" : "en_US",
      url: `${SITE_URL}${path}`,
      title: t("title"),
      description: t("description"),
      siteName: "Reynoso Construction",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
        <StructuredData locale={locale as Locale} siteUrl={SITE_URL} />
      </body>
    </html>
  );
}
