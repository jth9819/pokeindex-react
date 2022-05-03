import "./styles/App.css";
import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search"
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppNavbar />
      <div className="content">
        <div className="container"> {/* Applies a set width */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;