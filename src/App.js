import "./styles/App.css";
import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppNavbar />
      {/* <div className="outer-container"> */}
      <div className="container">
        {/* Applies a set width */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
      {/* </div> */}
    </Router>
  );
}

export default App;
