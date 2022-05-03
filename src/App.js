import "./styles/App.css";
import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* Applies a set width */}
      <div className="content">
        <div className="container">
          <AppNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;