import { business } from "~/data/business";

export function absoluteUrl(pathOrUrl: string) {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return new URL(pathOrUrl, business.canonicalUrl).toString();
}

export function homeMeta() {
  const image = absoluteUrl(business.ogImage.src);

  return [
    { title: business.seo.title },
    { name: "description", content: business.seo.description },
    { name: "keywords", content: business.seo.keywords },
    { name: "robots", content: "index, follow" },
    { name: "author", content: business.name },
    { name: "theme-color", content: "#18181b" },
    { name: "geo.region", content: "US-FL" },
    { name: "geo.placename", content: "Gainesville" },
    { tagName: "link", rel: "canonical", href: business.canonicalUrl },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "en_US" },
    { property: "og:site_name", content: business.name },
    { property: "og:title", content: business.seo.title },
    { property: "og:description", content: business.seo.description },
    { property: "og:url", content: business.canonicalUrl },
    { property: "og:image", content: image },
    { property: "og:image:secure_url", content: image },
    { property: "og:image:type", content: business.ogImage.type },
    { property: "og:image:width", content: business.ogImage.width.toString() },
    { property: "og:image:height", content: business.ogImage.height.toString() },
    { property: "og:image:alt", content: business.ogImage.alt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: business.seo.title },
    { name: "twitter:description", content: business.seo.description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: business.ogImage.alt },
  ];
}
