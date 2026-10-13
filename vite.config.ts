import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { copyFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

import { caseStudies, services } from "./src/data/site";

// GitHub Pages serves a 404 for unknown paths, so emit an index.html for every
// route. Direct visits to e.g. /privacy then load that page instead of the homepage.
const routes = [
  "about",
  "checkout",
  "contact",
  "cookies",
  "disclaimer",
  "faq",
  "privacy",
  "refund-policy",
  "shipping-policy",
  "solutions",
  "technology",
  "terms",
  "services",
  "work",
  ...services.map((s) => `services/${s.slug}`),
  ...caseStudies.map((c) => `work/${c.slug}`),
];

const spaRoutes = () => ({
  name: "spa-route-pages",
  apply: "build" as const,
  closeBundle() {
    const dist = resolve(__dirname, "dist");
    for (const route of routes) {
      mkdirSync(resolve(dist, route), { recursive: true });
      copyFileSync(resolve(dist, "index.html"), resolve(dist, route, "index.html"));
    }
  },
});

export default defineConfig({
  base: "/",
  plugins: [
    tsConfigPaths(),
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    spaRoutes(),
  ],
});
