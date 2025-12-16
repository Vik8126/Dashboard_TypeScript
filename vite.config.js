// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/", // ✅ IMPORTANT
  build: {
    outDir: "dist", // ✅ Netlify expects this
    assetsDir: "assets",
    sourcemap: false,
  },
});
