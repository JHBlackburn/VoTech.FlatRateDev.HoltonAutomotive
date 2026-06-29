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
  websiteDisplay: "holtonautomotive.com",
  websiteUrl: "https://holtonautomotive.com",
  canonicalUrl: "https://holtonautomotive.com",
  contactCardFilename: "holton-automotive.vcf",
  hoursNote: "Monday-Friday, 8:30 AM-5:30 PM",
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:30",
    closes: "17:30",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=1720%20NW%2053rd%20Ave%20Gainesville%20FL%2032653",
  heroImage: "/images/holton-shop-front.png",
  ogImage: {
    src: "/images/holton-og.jpg",
    width: 1200,
    height: 630,
    type: "image/jpeg",
    alt: "Holton Automotive shop exterior in Gainesville, Florida",
  },
  images: {
    hero: "/images/holton-shop-front.png",
    brakeService: "/images/brake-service.png",
    oilService: "/images/oil-service.png",
  },
  seo: {
    title: "Holton Automotive | Auto Repair in Gainesville, FL",
    description:
      "Local Gainesville auto repair shop offering diagnostics, maintenance, AC repair, alignments, brakes, and general automotive service.",
    keywords:
      "Holton Automotive, Gainesville auto repair, Gainesville mechanic, Mazda repair Gainesville, brake service, oil changes, AC repair",
    contactTitle: "Save Holton Automotive to Your Phone",
    contactDescription:
      "Tap to save Holton Automotive, call the shop, or get directions in Gainesville, Florida.",
  },
} as const;

export type Business = typeof business;

export const fullAddress = `${business.addressLine1}, ${business.city}, ${business.state} ${business.postalCode}`;
