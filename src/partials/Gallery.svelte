<script lang="ts">
  import gallery from "../assets/gallery.json";

  export let week: number;
  let entries: Array<[string, string]>;
  let rows: Array<Array<[string, string]>>;
  $: entries = Object.entries<string>(gallery[week]);
  $: rows = [entries.splice(0, 3), entries.splice(0, 2), entries.splice(0, 3)];
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
