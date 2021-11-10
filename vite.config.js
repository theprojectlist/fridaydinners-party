import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    svelte({
      onwarn(warning, defaultHandler) {
        if (warning.code === 'component-name-lowercase') return;
        defaultHandler(warning);
      }
    })
  ],
  build: {
    terserOptions: {
      toplevel: true,
      compress: {
        booleans_as_integers: true,
        drop_console: true,
        passes: 2,
        toplevel: true,
        unsafe: true
      }
    },
    rollupOptions: {
      input: {
        main: 'index.html',
        hats: 'meaganshats/index.html'
      }
    }
  }
})