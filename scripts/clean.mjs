import { existsSync, rmSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));

const targets = [
  "packages/core/dist",
  "packages/theme/dist",
  "packages/hooks/dist",
  "packages/utils/dist",
  "playground/dist"
];

for (const target of targets) {
  const absoluteTarget = resolve(root, target);

  if (existsSync(absoluteTarget)) {
    rmSync(absoluteTarget, { force: true, recursive: true });
  }
}
