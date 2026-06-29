# Holton Automotive

One-page SSR site for Holton Automotive in Gainesville, Florida. Built with React Router v7, Vite, TypeScript, Tailwind CSS, and Vercel.

## Local development

```bash
npm install
npm run dev
```

## Build and test

```bash
npm run test
npm run build
```

## Deploy

Import this repository in Vercel and use the default build command:

```bash
npm run build
```

The app is configured for React Router SSR on Vercel through `react-router.config.ts`.

## Business info

Edit `app/data/business.ts` for the phone number, address, domain, maps URL, SEO copy, and configured image paths. Contact actions, local business schema, Open Graph tags, and the vCard route all read from this config.

Production URL:

```ts
websiteUrl: "https://holtonautomotive.com"
canonicalUrl: "https://holtonautomotive.com"
```

## Photos to provide

Add these files under `public/images/`:

| File | What to provide |
| --- | --- |
| `holton-shop-front.png` | Exterior shop-front image used by the hero. |
| `holton-og.jpg` | 1200x630 social preview image for Open Graph, SMS, and large Twitter cards. |
| `brake-service.png` | Brake service background image. |
| `oil-service.png` | Oil service background image. |

The site works before these are uploaded. Missing images show a built-in placeholder.

## Hero image and SMS previews

`business.ogImage` points to `/images/holton-og.jpg`, a 1200x630 image generated from the real shop-front photo. Metadata is rendered server-side with absolute URLs, image dimensions, MIME type, and alt text so link previews and text-message previews can read it.

## vCard route

`/download-contact.vcf` returns an inline vCard 3.0 contact file with:

- `Content-Type: text/vcard; charset=utf-8`
- `Content-Disposition: inline; filename="holton-automotive.vcf"`
- `X-Robots-Tag: noindex, nofollow`

The vCard is generated from `app/data/business.ts` by `app/utils/vcard.ts`.
