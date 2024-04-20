import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@apis": fileURLToPath(new URL("./src/apis", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@stores": fileURLToPath(new URL("./src/stores", import.meta.url)),
      "@router": fileURLToPath(new URL("./src/router", import.meta.url)),
      "@types": fileURLToPath(new URL("./src/types", import.meta.url)),
      "@constants": fileURLToPath(new URL("./src/constants", import.meta.url)),
    },
  },
});
