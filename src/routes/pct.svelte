<script lang="ts">
  const images = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
</script>

<svelte:head>
  <title>Meagan's Hats | FD</title>
</svelte:head>

<section id="pct" class="container">
  <h2>Meagan's Hats! ⛰️</h2>

  <p>
    Alright y'all, here's what's going on: if you haven't heard, <a
      href="https://www.instagram.com/carakeleher">@carakeleher</a
    >
    and I are planning to hike the PCT in a year and a half, which we're so fricken pumped
    for (check out the saga of our friendship at @meaganandcara on IG). In order to start
    fundraising so we can, like, eat on the trail, I'm making and selling some awesome hats!
  </p>

  <p>
    I'm selling them for $25 + shipping (or more if you want to by us you know, a couple
    burgers each or a night at a hostel). <b
      >If you're interested, email me at
      <a href="mailto:orangewolf10@gmail.com">orangewolf10@gmail.com</a> or dm
      <a href="https://www.instagram.com/meagangoesoutside">@meagangoesoutside</a>
      on IG with a preference like "striped", "muted", or "absolutely crazy" and I'll pick
      a hat that matches your chosen vibe.</b
    >
  </p>

  <p>Tell you friends! Tell your family! Buy for Christmas or other winter holidays!</p>

  {#each images as row}
    <div class="row">
      {#each row as image}
        <div class="one-third column">
          <img class="u-max-full-width" src="/hats/{image}.jpg" alt="hat" />
        </div>
      {/each}
    </div>
  {/each}
</section>
