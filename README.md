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

Edit `app/data/business.ts` for the phone number, address, final domain, maps URL, SEO copy, and configured image paths. Contact actions, local business schema, Open Graph tags, and the vCard route all read from this config.

Before production, replace:

```ts
websiteUrl: "https://REPLACE-WITH-FINAL-DOMAIN.com"
canonicalUrl: "https://REPLACE-WITH-FINAL-DOMAIN.com"
```

## Photos to provide

Add these files under `public/images/`:

| File | What to provide |
| --- | --- |
| `holton-hero.jpg` | Best exterior or shop-front image. This also drives the Open Graph/SMS preview. |
| `shop-exterior.jpg` | Clear outside view of the building, sign, or entrance. |
| `service-bay.jpg` | Clean service bay or vehicle being worked on. |
| `team.jpg` | Real team or owner photo, if approved. |
| `vehicle-service.jpg` | Close, natural repair or maintenance photo. |

The site works before these are uploaded. Missing images show a built-in placeholder.

## Hero image and SMS previews

`business.ogImage` defaults to `/images/holton-hero.jpg`, the same path used by the hero image. Change `business.heroImage` and `business.ogImage` together if a different preview image is approved. Metadata is rendered server-side so link previews and text-message previews can read it.

## vCard route

`/download-contact.vcf` returns an inline vCard 3.0 contact file with:

- `Content-Type: text/vcard; charset=utf-8`
- `Content-Disposition: inline; filename="holton-automotive.vcf"`
- `X-Robots-Tag: noindex, nofollow`

The vCard is generated from `app/data/business.ts` by `app/utils/vcard.ts`.
