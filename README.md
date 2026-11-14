# COV-APPS Official Website

The public developer website for COV-APPS, hosted at https://cov-apps.github.io/.

## Stack
React 19 + Vite 6 + Tailwind CSS 3, deployed to GitHub Pages.

## Development
```bash
npm install
npm run dev
npm run build
```

## Deployment
Push to `main` to trigger `.github/workflows/deploy.yml`. In **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**.

## Structure
- `src/App.jsx`: home, app details, support, privacy hub, and site terms
- `src/styles.css`: layout and visual styles
- `apps/*/index.html`: direct-linkable app pages
- `support/index.html`, `privacy/index.html`, `terms/index.html`: independent routes
- `public/`: favicon, robots.txt and sitemap.xml

## Publishing checklist
- Verify exact Google Play listing URLs; current buttons deliberately open Play search results.
- Review app descriptions and replace concept visuals with genuine screenshots when available.
- Existing Tiny IP Camera policy remains at: https://covapps.blogspot.com/2026/10/tiny-ip-camera.html .
- Confirm the actual privacy policies for other apps before linking them.
- **GitHub Discussions is not enabled yet.** Enable it in repository Settings → General → Features → Discussions before switching support from Issues to Discussions.
- Add a public customer support email only after confirming the address.
- No analytics, cookies, authentication or contact forms are bundled in this MVP.

## License / content
Website source is maintained by COV-APPS. App brand assets and policies remain subject to their respective terms.
