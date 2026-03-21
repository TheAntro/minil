// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: "Public Sans",
      provider: fontProviders.fontsource(),
      cssVariable: "--font-public-sans",
    },
    {
      name: "Source Serif 4",
      provider: fontProviders.google(),
      cssVariable: "--font-source-serif",
    },
  ],
});
