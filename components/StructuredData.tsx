import { businessInfo } from "@/lib/business-info";
import type { Locale } from "@/i18n/routing";

interface StructuredDataProps {
  locale: Locale;
  siteUrl: string;
}

export function StructuredData({ locale, siteUrl }: StructuredDataProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: businessInfo.legalName,
    alternateName: businessInfo.shortName,
    description:
      locale === "es"
        ? "Contratista de mejoras del hogar con licencia, sirviendo a Staten Island y los cinco condados de Nueva York."
        : "Licensed home improvement contractor serving Staten Island and all five NYC boroughs.",
    url: siteUrl,
    telephone: businessInfo.phone.e164,
    email: businessInfo.email,
    foundingDate: businessInfo.formedDate,
    founder: {
      "@type": "Person",
      name: businessInfo.owner,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.region,
      postalCode: businessInfo.address.postal,
      addressCountry: businessInfo.address.country,
    },
    areaServed: businessInfo.serviceArea.map((borough) => ({
      "@type": "City",
      name: borough,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "New York City",
      },
    })),
    sameAs: [businessInfo.facebookUrl],
    priceRange: "$$",
    knowsLanguage: ["en", "es"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: businessInfo.phone.e164,
      contactType: "customer service",
      availableLanguage: ["English", "Spanish"],
    },
    identifier: {
      "@type": "PropertyValue",
      propertyID: "NY State Entity ID",
      value: businessInfo.nyEntityId,
    },
  };

  // Safe JSON-LD pattern: source is 100% compile-time constants from
  // business-info.ts (no user input ever reaches this string). The `<`
  // escape defensively blocks any future `</script>` breakout if the
  // constants are ever updated to include literal `<` characters.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger -- canonical JSON-LD pattern; payload is escaped above
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
