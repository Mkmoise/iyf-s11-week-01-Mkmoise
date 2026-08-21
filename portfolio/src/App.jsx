import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2>Moise</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        <p>© 2026 Moise Nyarugabo</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
