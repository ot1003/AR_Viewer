import { defineConfig } from "astro/config";
import basicSsl from '@vitejs/plugin-basic-ssl'
import solidJs from "@astrojs/solid-js";

import react from "@astrojs/react";
import minify from "@frontendista/astro-html-minify";

// https://astro.build/config
export default defineConfig({
  vite: {
    // Example: Add custom vite plugins directly to your Astro project
     //plugins: [basicSsl()],
  },
  server: {
    host: true,
  },

  integrations: [minify(), solidJs(), react()],
});
