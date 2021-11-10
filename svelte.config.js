import sass from 'sass'
import sveltePreprocess from 'svelte-preprocess'

export default {
  preprocess: sveltePreprocess({
    sass: {
      renderSync: true,
      implementation: sass
    }
  })
}
