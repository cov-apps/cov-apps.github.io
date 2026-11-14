import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
const pages = [
  'index.html',
  'support/index.html',
  'privacy/index.html',
  'terms/index.html',
  'apps/tiny-ip-camera/index.html',
  'apps/ip-camera-finder/index.html',
  'apps/jlpt-vocabulary/index.html',
  'apps/lotto-lookup/index.html',
];
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      input: Object.fromEntries(pages.map((page) => [page.replaceAll('/', '-'), resolve(process.cwd(), page)])),
    },
  },
});
