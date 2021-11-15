<script lang="ts">
  import Meals from "$lib/Meals.svelte";
</script>

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
    <li><a href="/pct">Meagan's Hats</a></li>
  </ul>
</nav>

<Meals />

<footer class="container">
  <p>Sprouted 🌱 at Olin and without 🥜</p>
</footer>

<style lang="scss">
  header {
    .img {
      background-image: url("/background.jpg");
      background-size: cover;
      background-position: center;
      height: 35rem;
    }

    h1 {
      letter-spacing: 0.125rem;
    }
  }

  nav {
    padding: 2rem 0;
    margin-top: 2rem;
    border-top: 1px solid;
    border-bottom: 1px solid;
    max-width: 480px;

    ul {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      list-style: none;
      margin: 0;

      li {
        text-transform: uppercase;
        margin: 0;
        text-align: center;
        flex: 0 1 auto;

        a {
          text-decoration: none;
          color: #222;
          letter-spacing: 0.2rem;
          font-weight: 600;

          &:hover {
            color: #0fa0ce !important;
          }
        }
      }
    }
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
