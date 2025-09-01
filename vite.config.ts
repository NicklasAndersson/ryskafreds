import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      // Här kan du anpassa optimeringsinställningarna.
      // Exempel:
      // png: { quality: 85 },
      // jpeg: { quality: 85 },
    }),
  ],
});
