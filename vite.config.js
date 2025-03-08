import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Moves node_modules into a separate chunk
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increases chunk warning limit from 500kB to 1MB
  },
});

