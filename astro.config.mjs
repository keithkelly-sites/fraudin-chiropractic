import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
export default defineConfig({
  site: "https://fraudin-chiropractic.keithkelly.dev",
  output: "static",
  integrations: [sitemap()],
  fonts: [
    { provider: fontProviders.google(), name: "Source Sans 3", cssVariable: "--font-body", weights: [400, 500, 600, 700], styles: ["normal"], fallbacks: ["system-ui", "sans-serif"] },
    { provider: fontProviders.google(), name: "Lora", cssVariable: "--font-display", weights: [400, 600, 700], styles: ["normal", "italic"], fallbacks: ["Georgia", "serif"] },
  ],
});
