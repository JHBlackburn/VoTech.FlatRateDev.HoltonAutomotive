export const business = {
  name: "Holton Automotive",
  shortName: "Holton",
  phoneDisplay: "(352) 384-0018",
  phoneHref: "+13523840018",
  addressLine1: "1720 NW 53rd Ave",
  city: "Gainesville",
  state: "FL",
  postalCode: "32653",
  country: "USA",
  websiteUrl: "https://REPLACE-WITH-FINAL-DOMAIN.com",
  canonicalUrl: "https://REPLACE-WITH-FINAL-DOMAIN.com",
  contactCardFilename: "holton-automotive.vcf",
  hoursNote: "Call to confirm current hours before visiting.",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=1720%20NW%2053rd%20Ave%20Gainesville%20FL%2032653",
  heroImage: "/images/holton-hero.jpg",
  ogImage: "/images/holton-hero.jpg",
  images: {
    hero: "/images/holton-hero.jpg",
    shopExterior: "/images/shop-exterior.jpg",
    serviceBay: "/images/service-bay.jpg",
    team: "/images/team.jpg",
    vehicleService: "/images/vehicle-service.jpg",
  },
  seo: {
    title: "Holton Automotive | Auto Repair in Gainesville, FL",
    description:
      "Local Gainesville auto repair shop offering diagnostics, maintenance, AC repair, alignments, brakes, and general automotive service.",
    contactTitle: "Save Holton Automotive to Your Phone",
    contactDescription:
      "Tap to save Holton Automotive, call the shop, or get directions in Gainesville, Florida.",
  },
} as const;

export type Business = typeof business;

export const fullAddress = `${business.addressLine1}, ${business.city}, ${business.state} ${business.postalCode}`;
