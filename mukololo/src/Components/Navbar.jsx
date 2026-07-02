import React, { useState } from "react";
import "../assets/styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/ngele transparent.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
      <a href="#home">
    <img src={logo} alt="Mukololo Travel & Tours" />
  </a>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
        <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
        <li><a href="#specials" onClick={() => setMenuOpen(false)}>Specials</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

        <button className="mobile-btn">
          Book Now
        </button>
      </ul>

      <button className="desktop-btn">
        Book Now
      </button>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </nav>
  );
}

export default Navbar;