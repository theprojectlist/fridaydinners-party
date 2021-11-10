<script lang="ts">
  import a from "./assets/1.jpg";
  import b from "./assets/2.jpg";
  import c from "./assets/3.jpg";
  import d from "./assets/4.jpg";
  import e from "./assets/5.jpg";
  import f from "./assets/6.jpg";
  import g from "./assets/7.jpg";
  import h from "./assets/8.jpg";
  import i from "./assets/9.jpg";

  let images = [
    [a, b, c],
    [d, e, f],
    [g, h, i],
  ];
</script>

<main>
  <div class="container">
    <h1>Meagan's Hats!</h1>

    <p>
      Alright y'all, here's what's going on: if you haven't heard, <a
        href="https://www.instagram.com/carakeleher">@carakeleher</a
      >
      and I are planning to hike the PCT in a year and a half, which we're so fricken
      pumped for (check out the saga of our friendship at @meaganandcara on IG).
      In order to start fundraising so we can, like, eat on the trail, I'm making
      and selling some awesome hats!
    </p>

    <p>
      I'm selling them for $25 + shipping (or more if you want to by us you
      know, a couple burgers each or a night at a hostel). <b
        >If you're interested, dm me (<a
          href="https://www.instagram.com/meagangoesoutside"
          >@meagangoesoutside</a
        > on IG) with a preference like "striped", "muted", or "absolutely crazy"
        and I'll pick a hat that matches your chosen vibe.</b
      >
    </p>

    <p>
      Tell you friends! Tell your family! Buy for Christmasor other winter
      holidays!
    </p>

    {#each images as row}
      <div class="row">
        {#each row as image}
          <div class="one-third column">
            <img class="u-max-full-width" src={image} alt="hat" />
          </div>
        {/each}
      </div>
    {/each}
  </div>

  <footer class="container">
    <p>Crocheted 🧶 for cash by hand</p>
  </footer>
</main>

<style lang="scss">
  @import "https://fonts.googleapis.com/css?family=Raleway:400,300,600&display=swap";
  @import "normalize.css";
  @import "skeleton-css/css/skeleton.css";

  :global(html) {
    scroll-behavior: smooth;
  }

  .container {
    width: 40%;
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
