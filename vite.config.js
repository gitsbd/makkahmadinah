import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src/pages',
  server: {
    port: 3000,
    open: true,
    host: true,
    strictPort: false
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@scripts': resolve(__dirname, 'src/scripts'),
      '@locales': resolve(__dirname, 'src/locales'),
      '@assets': resolve(__dirname, 'public/assets')
    }
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/pages/index.html'),
        umrah: resolve(__dirname, 'src/pages/umrah.html'),
        hajj: resolve(__dirname, 'src/pages/hajj.html'),
        duas: resolve(__dirname, 'src/pages/duas.html'),
        'daily-duas': resolve(__dirname, 'src/pages/daily-duas.html'),
        'general-duas': resolve(__dirname, 'src/pages/general-duas.html'),
        guide: resolve(__dirname, 'src/pages/guide.html'),
        makkah: resolve(__dirname, 'src/pages/makkah.html'),
        madinah: resolve(__dirname, 'src/pages/madinah.html'),
        'makkah-places': resolve(__dirname, 'src/pages/makkah-places.html'),
        'madinah-places': resolve(__dirname, 'src/pages/madinah-places.html')
      }
    }
  },
  publicDir: resolve(__dirname, 'public')
});

