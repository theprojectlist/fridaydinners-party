import autoprefixer from 'autoprefixer'
import sass from 'sass'
import sveltePreprocess from 'svelte-preprocess'

export default {
  preprocess: sveltePreprocess({
    postcss: {
      plugins: [
        autoprefixer
      ]
    },
    sass: {
      renderSync: true,
      implementation: sass
    }
  })
}
