import { useNavigate } from "react-router-dom";

import "../styles/components/Footer.css";
import MainLogo from "../assets/images/navbar-footer-pokeball.png";

const Footer = () => {
  let navigate = useNavigate();
  return (
    <footer className="container footer">
      <div className="row">
        {/* Icon/Info column */}
        <div className="col-12 col-md">
          <img src={MainLogo} alt="Pokeball Icon" width="30px" height="30px" />
          <a
            href="https://github.com/jth9819"
            target="_blank"
            rel="noreferrer"
            className="text-muted"
          >
            <small className="d-block mb-3 text-muted">
              &copy; 2022 Justin Harrison
            </small>
          </a>
        </div>
        {/* Features Column */}
        <div className="col-12 col-md">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li>
              <button
                className="text-muted"
                onClick={() => {
                  navigate("/search", { replace: true });
                }}
              >
                Search for Pokemon
              </button>
            </li>
            <li>
              <button
                className="text-muted"
                onClick={() => {
                  navigate("/browse", { replace: true });
                }}
              >
                Browse Pokemon
              </button>
            </li>
          </ul>
        </div>
        {/* Resources Column */}
        <div className="col-12 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li>
              <button
                className="text-muted"
                onClick={() => {
                  navigate("/about", { replace: true });
                }}
              >
                Resources
              </button>
            </li>
          </ul>
        </div>
        {/* About Column */}
        <div className="col-12 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li>
              <button
                className="text-muted"
                onClick={() => {
                  navigate("/about", { replace: true });
                }}
              >
                About
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
