import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import "../assets/styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h2>Your Travel Brand</h2>
          <p>
            Creating unforgettable travel experiences through reliable,
            affordable, and personalized travel solutions. Let us help you
            explore the world with confidence.
          </p>

          <div className="footer-socials">
  <a
    href="https://www.facebook.com/profile.php?id=61588482265846"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://instagram.com/YourUsername"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </a>

  <a
    href="https://wa.me/27814372924"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaWhatsapp />
  </a>
</div>
        </div>
        <div className="footer-links">
  <h3>Quick Links</h3>

  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About Us</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#gallery">Gallery</a></li>
    <li><a href="#specials">Special Offers</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</div>

        <div className="footer-services">
          <h3>Services</h3>
          <ul>
            <li>Visa Assistance</li>
            <li>Flight Bookings</li>
            <li>Hotel Reservations</li>
            <li>Travel Packages</li>
            <li>Custom Itineraries</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>

          <p>
            <FaMapMarkerAlt /> South Africa
          </p>

          <p>
            <FaPhone /> +27 81 437 2924
          </p>

          <p>
            <FaEnvelope /> mukololotravelntour.mtt@gmail.com
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Mukololo Travel & Tour. All Rights Reserved.
        </p>

        <p>
          Designed & Developed by <strong>Black Nexus Space</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;