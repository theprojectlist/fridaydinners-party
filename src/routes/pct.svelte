<script lang="ts">
  const images = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
</script>

<div class="container">
  <h1>Meagan's Hats! ⛰️</h1>

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
      >If you're interested, dm me (<a
        href="https://www.instagram.com/meagangoesoutside">@meagangoesoutside</a
      > on IG) with a preference like "striped", "muted", or "absolutely crazy" and I'll
      pick a hat that matches your chosen vibe.</b
    >
  </p>

  <p>Tell you friends! Tell your family! Buy for Christmas or other winter holidays!</p>

  {#each images as row}
    <div class="row">
      {#each row as image}
        <div class="one-third column">
          <img class="u-max-full-width" src={`/hats/${image}.jpg`} alt="hat" />
        </div>
      {/each}
    </div>
  {/each}
</div>

<footer class="container">
  <p>Crocheted 🧶 for cash by hand 💸</p>
</footer>

<style lang="scss">
  .container {
    margin-top: 5rem;

    h1 {
      text-align: center;
      margin-bottom: 3rem;
    }

    p {
      font-size: 1.75rem;
    }
  }

  footer {
    text-align: center;
  }
</style>
