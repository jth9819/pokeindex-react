import '../styles/About.css';

import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {
    return (
        <div id="content-wrap">
            <div className="home-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-3"><strong>About PokéIndex</strong></h1>
                <p className="lead">A Beta Pokédex</p>
            </div>
        </div>
    );
}

export default Home;