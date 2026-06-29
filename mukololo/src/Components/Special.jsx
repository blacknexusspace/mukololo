import React from "react";
import "../assets/styles/Special.css";
import flyer from "../assets/images/boardwalk.jpg";

function Special() {
  return (
    <section className="special">
      <div className="special-heading">
        <span>Special Offers</span>
        <h2>Travel Deals You Don't Want to Miss</h2>
        <p>
          Discover our latest travel promotions and limited-time packages.
        </p>
      </div>

      <div className="special-card">
        <div className="special-image">
          <img src={flyer} alt="Cape Town Tour" />
        </div>

        <div className="special-details">
          <div className="offer-badge">
            Limited Offer
          </div>

          <h3>Cape Town Spring Escape</h3>

          <p>
            Enjoy a carefully planned getaway with accommodation,
            transportation, sightseeing, and unforgettable experiences.
          </p>

          <ul>
            <li>3 Nights Accommodation</li>
            <li>Return Transport</li>
            <li>Breakfast Included</li>
            <li>Guided City Tour</li>
          </ul>

          <div className="price">
            From <span>R4,500</span>
          </div>

          <div className="buttons">
           
            <button className="primary">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Special;