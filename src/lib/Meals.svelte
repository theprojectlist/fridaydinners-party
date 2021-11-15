<script lang="ts">
  import menus from "../assets/menu.json";
  import Gallery from "./Gallery.svelte";

  let entries: Array<[string, object]> = Object.entries<object>(menus);
  let week = entries.length - 1;
  let label: string;
  let menu: Array<[string, Array<string>]>;

  $: {
    label = entries[week][0];
    menu = Object.entries(entries[week][1]);
  }
</script>

<section id="meals" class="container">
  <div class="row">
    <div class="column">
      <h3>
        <small class:disabled={week <= 0} on:click={() => (week -= 1)}>&lt;&lt;</small>
        <span>Menu</span>
        <small class:disabled={week >= entries.length - 1} on:click={() => (week += 1)}
          >&gt;&gt;</small
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
    </div>
  </div>
</section>

<Gallery {week} />

<style lang="scss">
  #meals {
    h3 {
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

    .row {
      display: flex;
      justify-content: center;
      font-size: 2rem;
    }

    .column {
      width: auto;
    }
  }
</style>
