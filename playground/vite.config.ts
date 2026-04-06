import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@uniui/core/styles.css",
        replacement: resolve(__dirname, "../packages/core/src/styles.css")
      },
      {
        find: "@uniui/core",
        replacement: resolve(__dirname, "../packages/core/src/index.ts")
      },
      {
        find: "@uniui/hooks",
        replacement: resolve(__dirname, "../packages/hooks/src/index.ts")
      },
      {
        find: "@uniui/theme",
        replacement: resolve(__dirname, "../packages/theme/src/index.ts")
      },
      {
        find: "@uniui/utils",
        replacement: resolve(__dirname, "../packages/utils/src/index.ts")
      }
    ],
    dedupe: ["react", "react-dom"]
  }
});
