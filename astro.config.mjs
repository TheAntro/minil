// @ts-check
import { defineConfig, envField, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },

  fonts: [
    {
      name: "Public Sans",
      provider: fontProviders.google(),
      cssVariable: "--font-public-sans",
    },
  ],

  output: "server",
  adapter: cloudflare(),
  env: {
    schema: {
      LAW_DATA_URL: envField.string({
        context: "server",
        access: "public",
        optional: false,
      }),
    },
  },
});
