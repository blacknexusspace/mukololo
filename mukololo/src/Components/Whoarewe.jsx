import React from "react";
import "../assets/styles/whoarewe.css";
import Container from "../Pages/container";
import boardwalk from "../assets/images/boardwalk.jpg";

function Whoarewe() {
  return (
    <Container>
      <section className="who-section">

        <div className="who-left">
          <span className="who-tag">ABOUT US</span>

          <h2 className="who-title">
            We Create Journeys,
            <br />
            Not Just Trips.
          </h2>

          <p className="who-text">
            We are a passionate travel company dedicated to making every
            journey seamless and unforgettable. From visa assistance and
            accommodation to curated travel experiences, we handle every
            detail so you can focus on making memories.
          </p>

          <div className="who-stats">

            <div className="stat-card">
              <h3>500+</h3>
              <p>Happy Travellers</p>
            </div>

            <div className="stat-card">
              <h3>25+</h3>
              <p>Destinations</p>
            </div>

            <div className="stat-card">
              <h3>100%</h3>
              <p>Customer Support</p>
            </div>

          </div>

          <button className="about-btn">
            Get To Know Us
          </button>

        </div>

        <div className="who-right">

          <div className="image-box">
            <img src={boardwalk} alt="Travel" />
          </div>

        </div>

      </section>
    </Container>
  );
}

export default Whoarewe;