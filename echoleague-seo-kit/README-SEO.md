# EchoLeague SEO Kit

This kit adds sensible SEO defaults to your Vite + React site (HashRouter-friendly).

## What’s included
- `public/robots.txt` — allows all, points to sitemap
- `public/sitemap.xml` — home + Santorini (pretty path)
- `public/CNAME` — custom domain (echoleague.xyz)
- `public/site.webmanifest` — PWA basics for icons/theme
- `public/humans.txt` — optional, team info
- `public/og/og-default.jpg` & `.webp` — default OpenGraph image
- `src/seo/SEO.jsx` — lightweight SEO component (react-helmet-async)
- `src/seo/JsonLd.jsx` — helper to inject JSON‑LD
- `src/seo/organization.json` — Organization schema template
- `404.html` — SPA fallback so BrowserRouter-style paths (e.g. /santorini) resolve on GitHub Pages

## Quick start
1. **Install dependencies**
   ```bash
   npm i react-helmet-async
   ```
2. **Wrap your app** (src/main.jsx)
   ```jsx
   import { HelmetProvider } from "react-helmet-async";
   // ...
   createRoot(document.getElementById("root")).render(
     <HelmetProvider>
       <HashRouter>
         <Routes>...</Routes>
       </HashRouter>
     </HelmetProvider>
   );
   ```
3. **Use the SEO component** on each page:
   ```jsx
   import SEO from "./seo/SEO";
   <SEO
     title="EchoLeague — Designs worn to inspire"
     description="Small-batch graphics with story and soul. Printed on demand to reduce waste."
     canonical="https://echoleague.xyz/"
     image="/og/og-default.jpg"
   />
   ```
   Santorini page:
   ```jsx
   <SEO
     title="Santorini — EchoLeague"
     description="The origin story and our travel goal. Shop to support the trip."
     canonical="https://echoleague.xyz/santorini"
     image="/og/og-default.jpg"
   />
   ```

## HashRouter note
Search engines ignore `/#/…` URLs. This kit includes a `404.html` SPA fallback so you can use **pretty paths** like `/santorini` and list them in your sitemap, even on GitHub Pages.

## JSON‑LD
Drop this on the home page for Organization/site info:
```jsx
import JsonLd from "./seo/JsonLd";
import org from "./seo/organization.json";
<JsonLd data={org} />
```
Update fields in `src/seo/organization.json` (name, url, sameAs).

## Sitemap
Edit `public/sitemap.xml` if you add more pages. Re‑deploy to update.

## Robots
`robots.txt` references `/sitemap.xml`. Leave as-is unless you need to disallow staging paths.

---

Questions? Ping me and I’ll wire this into your repo for you.
