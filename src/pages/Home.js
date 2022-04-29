import '../styles/Home.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'

import CardImage from '../assets/images/pokemon-art-4.jpeg';

import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {
    return (
        <div id="content-wrap">
            <div className="home-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-3"><strong>PokéIndex</strong></h1>
                <p className="lead">Search for any Pokemon!</p>
            </div>
            <Card className="home-card" style={{ width: '30rem' }}>
                <Card.Img variant="top" src={CardImage} />
                <Card.Body>
                    <Card.Title>Search & Browse for your Pokémon!</Card.Title>
                    <Card.Text>
                        Have a certain Pokémon in mind? You can view all of its information by searching for it. Just want to browse? You can do that too!
                    </Card.Text>
                    <LinkContainer to="/search">
                        <Button className="card-button" variant="secondary">Search</Button>
                    </LinkContainer>
                    <LinkContainer to="/browse">
                        <Button className="card-button" variant="secondary">Browse</Button>
                    </LinkContainer>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Home;