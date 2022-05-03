import "../styles/Footer.css";
import { useNavigate } from "react-router-dom";

import MainLogo from "../assets/images/favicon.ico";

const Footer = () => {
  let navigate = useNavigate();

  return (
    <footer class="container footer">
      <div class="row">
        {/* Icon/Info column */}
        <div class="col-12 col-md">
          <img src={MainLogo} alt="Pokeball Icon" width="30px" height="30px" />
          <small class="d-block mb-3 text-muted">
            &copy; 2022 Justin Harrison
          </small>
        </div>
        {/* Features Column */}
        <div class="col-12 col-md">
          <h5>Features</h5>
          <ul class="list-unstyled text-small">
            <li>
              <a
                href
                class="text-muted"
                onClick={() => {
                  navigate("/search", { replace: true });
                }}
              >
                Search for Pokemon
              </a>
            </li>
            <li>
              <a
                href
                class="text-muted"
                onClick={() => {
                  navigate("/browse", { replace: true });
                }}
              >
                Browse Pokemon
              </a>
            </li>
          </ul>
        </div>
        {/* Resources Column */}
        <div class="col-12 col-md">
          <h5>Resources</h5>
          <ul class="list-unstyled text-small">
            <li>
              <a
                href
                class="text-muted"
                onClick={() => {
                  navigate("/about", { replace: true });
                }}
              >
                Resources
              </a>
            </li>
          </ul>
        </div>
        {/* About Column */}
        <div class="col-12 col-md">
          <h5>About</h5>
          <ul class="list-unstyled text-small">
            <li>
              <a
                href
                class="text-muted"
                onClick={() => {
                  navigate("/about", { replace: true });
                }}
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
