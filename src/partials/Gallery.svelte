<script lang="ts">
  import gallery from "../assets/gallery.json";

  export let week: number;
  let layout: Uint8Array;
  let entries: Array<[string, string]>;
  let rows: Array<Array<[string, string]>>;

  $: {
    layout = gallery[week]["_layout"];
    entries = Object.entries<string>(gallery[week]).splice(1);
    rows = [
      entries.splice(0, layout[0]),
      entries.splice(0, layout[1]),
      entries.splice(0, layout[2]),
    ];
  }
</script>

<section id="gallery" class="container">
  {#each rows as row}
    <div class="row">
      {#each row as image}
        <div class="one-{row.length == 3 ? 'third' : 'half'} column">
          <img
            class="u-max-full-width"
            src="/images/{week + 1}/{image[0]}.jpg"
            alt={image[1]}
          />
        </div>
      {/each}
    </div>
  {/each}
</section>

<style lang="scss">
  .row {
    display: flex;
    justify-content: center;
  }
</style>
