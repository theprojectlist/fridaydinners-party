<script lang="ts">
  import menus from "../assets/menu.json";
  import Gallery from "$lib/PartialGallery.svelte";

  let entries: Array<[string, object]> = Object.entries<object>(menus);
  let week = entries.length - 1;
  let label: string;
  let menu: Array<[string, Array<string>]>;

  $: {
    label = entries[week][0];
    menu = Object.entries(entries[week][1]);
  }
</script>

<section id="menu" class="container">
  <h3>
    <small
      role="button"
      tabindex="0"
      class:disabled={week <= 0}
      on:keydown={(e) => {
        if (e.key == "Enter") week -= 1;
      }}
      on:click={(e) => (week -= 1)}>&lt;&lt;</small
    >
    <span>Menu</span>
    <small
      tabindex="0"
      role="button"
      class:disabled={week >= entries.length - 1}
      on:keydown={(e) => {
        if (e.key == "Enter") week += 1;
      }}
      on:click={(e) => (week += 1)}>&gt;&gt;</small
    >
    <p>{label}</p>
  </h3>
  <ul>
    {#each menu as entry}
      {#if entry[0] != "others"}
        <li>
          {entry[0]}
          <ul>
            {#each entry[1] as food}
              <li>{food}</li>
            {/each}
          </ul>
        </li>
      {:else}
        {#each entry[1] as food}
          <li>{food}</li>
        {/each}
      {/if}
    {/each}
  </ul>
</section>

<Gallery {week} />

<style lang="scss">
  #menu {
    h3 {
      text-align: center;

      p {
        margin: 0;
        padding: 0;
        font-size: 0.5em;
      }

      small {
        font-size: 0.5em;
        text-decoration: underline;
        cursor: pointer;

        &.disabled {
          visibility: hidden;
        }
      }

      span {
        margin: 0 6rem;
      }
    }

    & > ul {
      width: fit-content;
      margin: 0 auto 2rem auto;

      @media (min-width: 550px) {
        font-size: 1.6rem;
      }
    }
  }
</style>
