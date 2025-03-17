import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import {componentTagger} from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/eaglerest_crm/",  // Убедись, что тут имя репозитория!
  build: {
    outDir: "dist",
    assetsDir: "assets", // Указывает, куда складывать статические файлы
  },
  server: {
    host: "::",
    port: 8080,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
}));

