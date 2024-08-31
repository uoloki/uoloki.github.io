import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
    minify: "terser",
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
});