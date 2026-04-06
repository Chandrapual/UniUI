import { resolve } from "node:path";

import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

interface CreatePackageViteConfigOptions {
  entry?: string;
  external?: string[];
  name: string;
  packageRoot: string;
}

export function createPackageViteConfig({
  entry = "src/index.ts",
  external = [],
  name,
  packageRoot
}: CreatePackageViteConfigOptions) {
  return defineConfig({
    build: {
      copyPublicDir: false,
      emptyOutDir: true,
      lib: {
        entry: resolve(packageRoot, entry),
        fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
        formats: ["es", "cjs"],
        name
      },
      outDir: resolve(packageRoot, "dist"),
      rollupOptions: {
        external
      },
      sourcemap: true
    },
    plugins: [
      dts({
        entryRoot: resolve(packageRoot, "src"),
        include: [resolve(packageRoot, "src")],
        insertTypesEntry: true,
        outDir: resolve(packageRoot, "dist"),
        tsconfigPath: resolve(packageRoot, "tsconfig.json")
      })
    ]
  });
}

