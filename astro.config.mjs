// astro.config.mjs
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite"; // ⬅️ v4 plugin

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: { enabled: false },
  output: "static",
  // base: "https://github.com/severitech/animales-domesticos",
  // adapter: github(),
});
