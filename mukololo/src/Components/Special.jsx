import React from "react";
import "../assets/styles/Special.css";

import trip1 from "../assets/images/mpumalanga.jpeg";
import trip2 from "../assets/images/port elizabeth.jpeg";


function Special() {
  const trips = [
    {
      id: 1,
      image: trip1,
      title: "Explore Mpumalanga",
      date: "18 - 20 December 2026",
      price: "R3550",
      description:
        "Experience Mpumalanga with beautiful nature , transport and guided tours.",
    },
    {
      id: 2,
      image: trip2,
      title: "Let's Explore Port Elizabeth Gqeberha",
      date: "05 - 07 March 2027",
      price: "R6 500",
      description:
        "Relax on Port Elizabeth beautiful beaches with exciting activities and premium accommodation.",
    },

  ];

  return (
    <section className="special">
      <div className="special-heading">
        <span>UPCOMING TRIPS</span>
        <h2>Choose Your Next Adventure</h2>
      </div>

      {trips.map((trip, index) => (
        <div
          key={trip.id}
          className={`trip ${index % 2 !== 0 ? "reverse" : ""}`}
        >
          <div className="trip-image">
            <img src={trip.image} alt={trip.title} />
          </div>

          <div className="trip-content">
            <span className="badge">Limited Seats</span>

            <h2>{trip.title}</h2>

            <p className="date">
              <strong>Date:</strong> {trip.date}
            </p>

            <p>{trip.description}</p>

            <h3>{trip.price}</h3>

            <button>Book Now</button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Special;