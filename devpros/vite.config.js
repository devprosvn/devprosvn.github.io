import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: [
      "704121ea-ae96-4046-b8a9-9ad223f81cea-00-22ldn95z4bfkm.pike.replit.dev",
    ],
  },
});
