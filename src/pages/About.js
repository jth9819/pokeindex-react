import "../styles/About.css";
import { useNavigate } from "react-router-dom";

import CharizardImage from "../assets/images/charizard-about.png";
import BlastoiseImage from "../assets/images/blastoise-about.png";
import VenusaurImage from "../assets/images/venusaur-about.png";

import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  let navigate = useNavigate();

  return (
    <div id="content-wrap">
      {/* Title */}
      <div className="home-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-3">
          <strong>About PokéIndex</strong>
        </h1>
        <p className="lead">A Beta Pokédex</p>
      </div>
      {/* Welcome, Why, How Section */}
      <section class="welcome-why-how">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h2>Welcome!</h2>
              <p>
                Welcome to PokeIndex! We are a service that helps you explore
                all things Pokemon! Whether you are looking to learn about new
                pokemon, or dive deeper into the details pokemon you're already
                familiar with, our goal is to make the process as enjoyable as
                possible for you
              </p>
              {
                <p>
                  <button
                    class="btn btn-secondary"
                    onClick={() => {
                      navigate("/", { replace: true });
                    }}
                  >
                    Go Home &raquo;
                  </button>
                </p>
              }
            </div>
            <div class="col-md-4">
              <h2>Why</h2>
              <p>
                Pokemon has been around for twenty five years and it is still
                very popular among game enthusiasts. There are plenty of PokeDex
                applications out there that offer many features! Our aim at
                PokeIndex is to provide a minimal, simplistic, and plesant to
                use web application. We've noticed that many applications are
                cluttered with ads and offer a confusing amount of futures that
                often overwhelms the user. Not here!
              </p>
              <p>
                <a
                  class="btn btn-secondary"
                  href="https://itnext.io/my-minimalist-approach-to-software-engineering-5bc743ecb295"
                >
                  Learn More &raquo;
                </a>
              </p>
            </div>
            <div class="col-md-4">
              <h2>How</h2>
              <p>
                To go into more detail of how PokeIndex works, it's important to
                point out that we do not update the database of Pokemon
                ourselves. We are currently using a restful Pokemon API that
                provides all of the Pokemon for us. Our job is to organize this
                data into information that is readable to the user. Currently,
                our favorite feature is <strong>search</strong>!
              </p>
              <p>
                <button
                  class="btn btn-secondary"
                  onClick={() => {
                    navigate("/search", { replace: true });
                  }}
                >
                  Show Me &raquo;
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Charizard Image */}
      <div class="images">
        <section class="container-about-image-one">
          <img src={CharizardImage} alt="Charizard" width="400px" />
          <cite>
            <a href="https://bulbapedia.bulbagarden.net/wiki/Charizard_(Pok%C3%A9mon)">
              Charizard
            </a>
            &nbsp;from Bulapedia
          </cite>
        </section>
      </div>
      {/* Potential Applications Section */}
      <section class="potential-applications">
        <div class="container">
          <h2 id="potential-applications">Potential Applications</h2>
          <p>
            I would now like to discuss some potential web applications that can
            be developed to work alongside PokeIndex. Keep in mind, these
            applications are not set in stone and are subject to change. The
            idea is for these apps to work alongside one another to provide an
            enjoyable experience for the user that is researching information
            about his/her favorite video games.
          </p>
          <ul>
            <li>
              A <strong>music player</strong> would be a great candidate to pair
              alongside PokeIndex. This would be a service that would play
              anonymous music tracks depending on the genre the user chooses.
              Additionally, this service would be able to provide sound effects
              for PokeIndex when the user clicks on a Pokemon's sprite.
            </li>
            <li>
              Another great application that could be implemented would be a{" "}
              <strong>wiki app</strong> for a particular Pokemon game. PokeIndex
              focuses on the details of a pokemon in every generation, but a
              wiki would offer a walkthrough and details about the game as a
              whole. This could work together well with PokeIndex.
            </li>
            <li>
              Finally, we have a <strong>screen time</strong> service. This
              could be very helpful for players that spend too much time playing
              video games. Pokemon is known to be a quite addicting game. This
              app would allow the user to set timers and record data according
              to how long a particular game has been played.
            </li>
          </ul>
        </div>
      </section>
      {/* Blastoise Image */}
      <div class="images">
        <section class="container-about-image-two">
          <img src={BlastoiseImage} alt="Blastoise" width="350px" />
          <cite>
            <a href="https://bulbapedia.bulbagarden.net/wiki/Blastoise_(Pok%C3%A9mon)">
              Blastoise
            </a>
            &nbsp;from Bulapedia
          </cite>
        </section>
      </div>
      {/* Other Information Section */}
      <section class="other-information">
        <div class="container">
          <h2 id="other-information">
            Other Information That May Interest You
          </h2>
          <ul>
            <li>
              Why are&nbsp;
              <a href="https://www.health.harvard.edu/blog/the-health-effects-of-too-much-gaming-2020122221645">
                prolonged periods of gaming
              </a>
              &nbsp;bad for you?
            </li>
            <li>
              What&nbsp;
              <a href="https://www.geico.com/living/home/technology/9-reasons-to-give-video-games-a-try/">
                benefits
              </a>
              &nbsp;does gaming have?
            </li>
            <li>
              The&nbsp;
              <a href="https://www.economist.com/prospero/2016/02/28/the-legacy-of-pokemon-for-millennials">
                legacy
              </a>
              &nbsp;pokemon has left us.
            </li>
          </ul>
        </div>
      </section>
      {/* Venusaur Image */}
      <div class="images">
        <section class="container-about-image-three">
          <img src={VenusaurImage} alt="Bulbasaur" width="400px" />
          <cite>
            <a href="https://bulbapedia.bulbagarden.net/wiki/Venusaur_(Pok%C3%A9mon)">
              Venusaur
            </a>
            &nbsp;from Bulapedia
          </cite>
        </section>
      </div>
    </div>
  );
}

export default Home;
