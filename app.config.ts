import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: [
          'favicon.ico', 
          'robots.txt', 
          '361-192.png',
          '361-512.png',
        ],
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        },
        devOptions: {
          enabled: true
        }
      })
    ]
  }
});