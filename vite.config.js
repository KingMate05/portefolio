import { defineConfig } from "vite";
import { ViteMinifyPlugin } from "vite-plugin-minify";

export default defineConfig({
  base: "./",
  css: {
    postcss: {},
  },
  sourcemap: true,
  root: "src",

  plugins: [ViteMinifyPlugin({})],

  build: {
    outDir: "../dist",
    emptyOutDir: true,

    rollupOptions: {
      input: {
        index: "./src/index.html",
      },
    },
  },
});
