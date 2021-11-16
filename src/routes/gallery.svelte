<script lang="ts">
  import menus from "../assets/menu.json";
  import Gallery from "$lib/PartialGallery.svelte";

  const entries: [string, object][] = Object.entries<object>(menus).reverse();
</script>

<section id="gallery" class="container">
  {#each entries as entry, index}
    <h5>{entry[0]}</h5>
    <Gallery week={entries.length - index - 1} />
  {/each}
</section>

<style lang="scss">
  h5 {
    margin: 1rem 10%;
  }
</style>
