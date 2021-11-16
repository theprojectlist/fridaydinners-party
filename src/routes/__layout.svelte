<header>
  <img class="u-full-width" src="background.jpg" alt="The whole gang, except Meagan" />
  <div class="container">
    <h1>🍲<wbr /> fridaydinners<wbr />.party</h1>
    <nav>
      <ul>
        <li><a href="/">Menu</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/pct">Meagan's Hats</a></li>
      </ul>
    </nav>
  </div>
</header>

<slot />

<footer class="container">
  <p>Sprouted 🌱 at Olin and without 🥜</p>
</footer>

<style lang="scss">
  @import "https://fonts.googleapis.com/css?family=Raleway:400,300,600&display=swap";
  @import "normalize.css";
  @import "skeleton-css/css/skeleton.css";

  header {
    .container {
      margin: 4rem auto;

      h1 {
        text-align: center;
      }

      nav {
        padding: 2rem 0;
        border-top: 1px solid;
        border-bottom: 1px solid;
        max-width: 480px;
        margin: 3rem auto 0;

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
    }

    @media (max-width: 550px) {
      img {
        display: none;
      }

      nav {
        font-size: 1.125rem;
      }
    }
  }

  footer {
    margin-top: 3rem;
    text-align: center;
  }
</style>
