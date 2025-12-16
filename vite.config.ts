import { defineConfig } from "vite";
import {resolve} from "node:path";
import prism from 'vite-plugin-prismjs';

export default defineConfig({
  base: "/portfolio-website/",
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        projects: resolve(__dirname, "projects/index.html"),
        "projects/cossmic_electricity_analysis": resolve(__dirname, "projects/cossmic_electricity_analysis.html"),
        "projects/zoom_vs_synopsys_financial_performance": resolve(__dirname, "projects/zoom_vs_synopsys_financial_performance.html")
      }
    }
  },
  plugins: [
      prism({
        languages: ['sql', 'dax', 'py', 'powerquery', 'bash'],
        theme: "tomorrow"
      })
  ]
});
