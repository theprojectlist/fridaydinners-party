import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import cssnano from "cssnano";
import autoprefixer from "autoprefixer";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    sass: {
      renderSync: true
    },
    postcss: {
      plugins: [autoprefixer(), cssnano({ preset: "advanced" })]
    }
  }),
  kit: {
    adapter: adapter({
      pages: "docs"
    })
  }
};

export default config;
