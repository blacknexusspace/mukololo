import React, { useEffect, useState } from "react";
import "../assets/styles/Herosection.css";
import { IoStarSharp } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import Container from "../Pages/container";

const slides = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];

function Herosection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider">

      {slides.map((image, index) => (
        <div
          key={index}
          className={`hero-image ${current === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      <div className="hero-overlay"></div>

      <Container>
        <div className="hero-content">

          <div className="stars">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoIosStarOutline />
            <span>4.9 Rated by 100+ Happy Travellers</span>
          </div>

          <h1>
            Explore Africa.
            <br />
            Travel Without Stress.
          </h1>

          <p>
            Book flights, hotels, visa assistance, holiday packages and
            unforgettable journeys across Southern Africa.
          </p>

          <div className="hero-buttons">
            <button className="btn-book">Book Your Trip</button>
            <button className="btn-outline">Explore Destinations</button>
          </div>

        </div>

        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={current === index ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </Container>

    </section>
  );
}

export default Herosection;