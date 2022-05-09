import "../styles/AppNavbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { LinkContainer } from "react-router-bootstrap";

import MainLogo from "../assets/images/favicon.ico";
import { Container } from "react-bootstrap";

const AppNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      className="sticky-nav"
      fixed="top"
      expand="sm"
      variant="dark"
    >
      <Container fluid>
        {/* Logo directs you to home page */}
        <LinkContainer to="/">
          <Nav.Link>
            <img src={MainLogo} alt="logo" width="30px" height="30px" />
          </Nav.Link>
        </LinkContainer>
        {/* Title directs you to home page */}
        <LinkContainer to="/">
          <Navbar.Brand>PokéIndex</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Title directs you to home page */}
          <Nav className="me-auto" id="nav-dropdowns">
            <NavDropdown title="Pokemon" id="basic-nav-dropdown">
              {/* Search DropDown Item */}
              <LinkContainer to="/search">
                <NavDropdown.Item id="search-button">Search</NavDropdown.Item>
              </LinkContainer>
              {/* Browse DropDown Item */}
              <LinkContainer to="/browse">
                <NavDropdown.Item id="browse-button">Browse</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            {/* About Nav.Link */}
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
