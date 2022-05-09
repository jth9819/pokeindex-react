import "../styles/Home.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

import CardImage from "../assets/images/pokemon-art-4.jpeg";

import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="row" id="content-wrap">
      {/* Heading */}
      <div className="home-header text-center">
        <h1 className="display-3">
          <strong>PokéIndex</strong>
        </h1>
        <p className="lead">Search for any Pokemon!</p>
      </div>
      <div className="col">
        <Card className="home-card">
          <Card.Img variant="top" src={CardImage} />
          <Card.Body>
            <Card.Title>Search & Browse for your Pokémon!</Card.Title>
            <Card.Text>
              Have a certain Pokémon in mind? You can view all of its
              information by searching for it. Just want to browse? You can do
              that too!
            </Card.Text>
            <LinkContainer to="/search">
              <Button className="card-button" variant="secondary">
                Search
              </Button>
            </LinkContainer>
            <LinkContainer to="/browse">
              <Button className="card-button" variant="secondary">
                Browse
              </Button>
            </LinkContainer>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Home;
