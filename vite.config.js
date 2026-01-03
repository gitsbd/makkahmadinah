import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  server: {
    port: 3000,
    open: true,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html',
        umrah: './umrah.html',
        hajj: './hajj.html',
        duas: './duas.html',
        'daily-duas': './daily-duas.html',
        'general-duas': './general-duas.html',
        guide: './guide.html',
        makkah: './makkah.html',
        madinah: './madinah.html',
        'makkah-places': './makkah-places.html',
        'madinah-places': './madinah-places.html'
      }
    }
  },
  publicDir: 'images'
});

