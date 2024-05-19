import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import Terminal from "vite-plugin-terminal";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Terminal()],
  server: {
    cors: false,
    // proxy: {
    //   "/post": {
    //     target: "http://172.17.12.163:8080",
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace(/^\/post/, ""),
    //   },
    // },
  },
});
