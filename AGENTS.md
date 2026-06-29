# Deployment Rules for React Router + Vercel

This project uses React Router v7 with Vite and may use framework mode / SSR.

Do not assume the Vercel output directory is `dist`.

Before changing deployment config:
1. Inspect `package.json`, `vite.config.*`, `react-router.config.*`, and `vercel.json`.
2. Run `npm run build`.
3. Inspect the actual generated output folders.
4. Make Vercel match the real output.

For SSR React Router apps on Vercel:
- Use `@vercel/react-router`.
- Include `vercelPreset()` in `react-router.config.ts`.
- Do not hardcode `"outputDirectory": "dist"` in `vercel.json`.
- Prefer Vercel's React Router framework support and keep `vercel.json` minimal.

For static SPA React Router apps:
- Confirm `ssr: false`.
- Confirm the actual static output folder.
- Use the actual generated folder, usually `build/client`, unless the app is plain Vite and truly emits `dist`.

The recurring failure to avoid:

`Error: No Output Directory named "dist" found after the Build completed.`
