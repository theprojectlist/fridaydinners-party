<script lang="ts">
  import buns from "../assets/buns.jpg";
  import cutting from "../assets/cutting.jpg";
  import elias from "../assets/elias.jpg";
  import grilling from "../assets/grilling.jpg";
  import sandwich from "../assets/sandwich.jpg";
  import shoebench from "../assets/shoebench.jpg";
  import squid from "../assets/squid.jpg";
  import table from "../assets/table.jpg";

  let images = [
    [
      [sandwich, "Char sandwich presentation"],
      [cutting, "Meg cutting buns"],
      [grilling, "Colin and Elias grilling the Char"],
    ],
    [
      [squid, "Squid-like charred kielbasa"],
      [elias, "Elias happily grilling Char"],
    ],
    [
      [buns, "Nice buns"],
      [table, "Eating together"],
      [shoebench, "Presenting the suite shoebench"],
    ],
  ];
</script>

<section id="gallery" class="container">
  {#each images as row}
    <div class="row">
      {#each row as image}
        <div class="one-{row.length == 3 ? 'third' : 'half'} column">
          <img class="u-max-full-width" src={image[0]} alt={image[1]} />
        </div>
      {/each}
    </div>
  {/each}
</section>

<style>
  #gallery {
    margin-top: 3rem;
  }
</style>
