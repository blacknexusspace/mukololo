import React from "react";
import "../assets/styles/Services.css";
import {
  FaPassport,
  FaPlaneDeparture,
  FaHotel,
  FaRoute,
  FaSuitcaseRolling,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "Visa Assistance",
      description:
        "Professional visa support for tourist, business and study travel.",
      icon: <FaPassport />,
      color: "#0F766E",
      large: true,
    },
    {
      title: "Flights & Hotels",
      description:
        "Affordable flight tickets and premium hotel reservations worldwide.",
      icon: <FaPlaneDeparture />,
      color: "#FF7A00",
    },
    {
      title: "Travel Packages",
      description:
        "Discover carefully curated local and international travel packages.",
      icon: <FaSuitcaseRolling />,
      color: "#2563EB",
    },
    {
      title: "Custom Itineraries",
      description:
        "Personalised travel plans built around your schedule and budget.",
      icon: <FaRoute />,
      color: "#9333EA",
    },
    {
      title: "Tours & Experiences",
      description:
        "Enjoy unforgettable guided tours and unique travel experiences.",
      icon: <FaHotel />,
      color: "#06B6D4",
    },
  ];

  return (
    <section className="services">
      <div className="services-title">
        <span>OUR SERVICES</span>
        <h2>Everything You Need For Your Next Adventure</h2>
        <p>
          From planning your journey to returning home, we take care of every
          detail so you can travel with confidence.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service ${service.large ? "large" : ""}`}
            style={{ "--accent": service.color }}
          >
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <button>Discover More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;