import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">EB</div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "show" : ""}`}>
          <a href="/" className="nav-link active">Home</a>
          <a href="/about" className="nav-link">About</a>
          {/* <a href="#services" className="nav-link">Services</a> */}
          <a href="/project" className="nav-link">Project</a>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
