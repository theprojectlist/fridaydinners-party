<script lang="ts">
  import Gallery from "./partials/Gallery.svelte";
  import Meals from "./partials/Meals.svelte";
  import WorkOrders from "./partials/WorkOrders.svelte";
</script>

<main>
  <header>
    <div class="img u-full-width" alt="The whole gang, except Meagan" />
    <div class="container">
      <h1 class="row">
        <span class="columns three">📐🍱🥑</span>
        <strong class="columns six"
          >fridaydinners<span class="text-rainbow">.party</span></strong
        >
        <span class="columns three">🥢🔨🍴</span>
      </h1>
    </div>
  </header>

  <nav class="container">
    <ul>
      <li><a href="#meals">Menu</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#workorders">Work Orders</a></li>
    </ul>
  </nav>

  <Meals />
  <Gallery />
  <WorkOrders />

  <footer class="container">
    <p>Sprouted 🌱 at Olin and without 🥜</p>
  </footer>
</main>

<style>
  @import "https://fonts.googleapis.com/css?family=Raleway:400,300,600";
  @import "normalize.css";
  @import "skeleton-css/css/skeleton.css";

  :global(html) {
    scroll-behavior: smooth;
  }

  header .img {
    background-image: url("./assets/background.jpg");
    background-size: cover;
    background-position: center;
    height: 50rem;
  }

  nav {
    padding: 2rem 0;
    margin-top: 2rem;
    border-top: 1px solid;
    border-bottom: 1px solid;
    max-width: 480px;
  }

  nav ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    margin: 0;
  }

  nav ul li {
    text-transform: uppercase;
    margin: 0;
    text-align: center;
    flex: 0 1 auto;
  }

  nav ul li a {
    text-decoration: none;
    color: #222;
    letter-spacing: 0.2rem;
    font-weight: 600;
  }

  nav ul li a:hover {
    color: #0fa0ce !important;
  }

  .text-rainbow {
    background-image: linear-gradient(
      to left,
      violet,
      indigo,
      blue,
      green,
      orange,
      red
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  :global(h3, h1) {
    margin-top: 6rem;
    text-align: center;
  }

  footer {
    margin-top: 3rem;
    text-align: center;
  }

  @media (max-width: 960px) {
    header h1 .columns {
      width: 100%;
      float: left;
      box-sizing: border-box;
      margin-left: 0;
      padding-top: 1rem;
    }
  }
</style>
