import { svelte } from '@sveltejs/vite-plugin-svelte';
import { sass, typescript } from 'svelte-preprocess';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    svelte({
      preprocess: [
        typescript(),
        sass({ charset: false }),
      ]
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
    }
  }
})