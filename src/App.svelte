<script lang="ts">
  import Gallery from "./partials/Gallery.svelte";
  import WorkOrders from "./partials/WorkOrders.svelte";
</script>

<main>
  <section id="header">
    <div class="row">
      <div class="column"><h2>&#127859; &#128736;</h2></div>
      <div class="column"><h1>fridaydinners.party</h1></div>
      <div class="column"><h2>&#129382; &#127881;</h2></div>
    </div>
  </section>

  <section id="meals" class="container">
    <h2>Menu</h2>
    <h4>Sandwiches</h4>
    <ul>
      <li>Homemade Milk Brioche</li>
      <li>Grilled Atlantic Char</li>
      <li>Tomato Ginger Chutney</li>
      <li>Arugula + Balsamic</li>
      <li>Side Greens</li>
    </ul>
    <h4>Postprandial</h4>
    <ul>
      <li>Browned Butter Blondies</li>
      <li>Moscow Mules</li>
    </ul>
  </section>

  <section id="gallery" class="container">
    <Gallery />
  </section>

  <section id="orders" class="container">
    <hr />
    <WorkOrders />
  </section>
</main>

<style>
  @import "normalize.css";
  @import "milligram";
  @import "https://use.typekit.net/rtb3iss.css";

  main {
    text-align: center;
    font-family: "Lato", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  }

  .container {
    margin-top: 7.5rem;
  }

  #header {
    color: black;
    padding: 3rem 0;
    background-color: rgb(0, 204, 204, 0.6);
  }
</style>
