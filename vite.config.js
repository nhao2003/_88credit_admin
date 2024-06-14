import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import Terminal from "vite-plugin-terminal";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Terminal()],
  server: {
    cors: false,
    host: "127.0.0.1",
    port: 4173,
    // proxy: {
    //   "/post": {
    //     target: "http://172.17.12.163:8080",
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace(/^\/post/, ""),
    //   },
    // },
  },
  preview: {
    cors: false,
    port: 4173,
    host: true,
  }
});
