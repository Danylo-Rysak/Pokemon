import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: 'core',
        replacement: fileURLToPath(new URL('./src/core', import.meta.url)),
      },
    ],
  },
});
