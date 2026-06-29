import { business } from "~/data/business";

export function absoluteUrl(pathOrUrl: string) {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return new URL(pathOrUrl, business.canonicalUrl).toString();
}

export function homeMeta() {
  const image = absoluteUrl(business.ogImage);

  return [
    { title: business.seo.title },
    { name: "description", content: business.seo.description },
    { tagName: "link", rel: "canonical", href: business.canonicalUrl },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: business.name },
    { property: "og:title", content: business.seo.title },
    { property: "og:description", content: business.seo.description },
    { property: "og:url", content: business.canonicalUrl },
    { property: "og:image", content: image },
    { property: "og:image:alt", content: `${business.name} shop photo` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: business.seo.title },
    { name: "twitter:description", content: business.seo.description },
    { name: "twitter:image", content: image },
  ];
}
