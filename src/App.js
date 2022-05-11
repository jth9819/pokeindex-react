import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
import Browse from "./pages/Browse";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <AppNavbar />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/search/" element={<Search />} />
            <Route path="/browse/" element={<Browse />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
