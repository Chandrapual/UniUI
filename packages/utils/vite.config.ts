import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { createPackageViteConfig } from "../../config/create-package-vite-config";

const packageRoot = dirname(fileURLToPath(import.meta.url));

export default createPackageViteConfig({
  name: "UniUIUtils",
  packageRoot
});

