import './styles/App.css';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home'
import About from './pages/About'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <div className="outer-container">
        <AppNavbar />
        <div className="container"> {/* Applies a set width */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;