import { defineConfig } from "vite";
import {resolve} from "node:path";

export default defineConfig({
  base: "/portfolio-website/",
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        projects: resolve(__dirname, "projects/index.html")
      }
    }
  }
});
