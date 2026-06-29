import { business } from "~/data/business";
import { absoluteUrl } from "~/utils/seo";

export function autoRepairSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: business.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.addressLine1,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.postalCode,
      addressCountry: business.country,
    },
    telephone: business.phoneDisplay,
    url: business.websiteUrl,
    image: absoluteUrl(business.heroImage),
    areaServed: {
      "@type": "City",
      name: "Gainesville, FL",
    },
  };
}
