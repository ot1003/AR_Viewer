import { defineConfig } from "astro/config";
// import basicSsl from "@vitejs/plugin-basic-ssl";
import solidJs from "@astrojs/solid-js";
import react from "@astrojs/react";
import preact from "@astrojs/preact";
import cloudflare from "@astrojs/cloudflare";


// https://astro.build/config
export default defineConfig({
  vite: {
    // Example: Add custom vite plugins directly to your Astro project
    //plugins: [basicSsl()],
  },
  server: {
    host: true
  },
  site: "https://ot1003.xxxxxxxx.jp",
  integrations: [solidJs(), preact({
    compat: true
  }), react()],
  output: "server",
  adapter: cloudflare({ mode: "directory" }),
});