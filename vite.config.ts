import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: './project-bolt-sb1-5rakyefp/project',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});