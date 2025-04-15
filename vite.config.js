import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import eslintPlugin from "@nabla/vite-plugin-eslint";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin(), tailwindcss()],
  resolve: {
    alias: {
      src: "/src",
      "@components": "/src/@components",
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
