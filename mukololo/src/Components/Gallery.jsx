import React from "react";
import "../assets/styles/Gallery.css";
import mpumalanga from "../assets/images/mpumalangatrip.jpg"
import pe from "../assets/images/happy-valley-beach.jpg"

function Gallery() {
  const destinations = [
    {
      id: 1,
      name: "Port Elizabeth Gqeberha, Eastern Cape ",
      image:pe,
      description: "Discover the beauty of Port Elizabeth",
      galleryLink: "/gallery/paris",
    },
    {
      id: 2,
      name: "Mpumalanga, South Africa",
      image: mpumalanga,
      description: "Experience breathtaking mountains and beaches.",
      galleryLink: "/gallery/capetown",
    },
  
  ];

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>Travel Gallery</h2>
        <p>
          Explore some of our most popular destinations around the world.
        </p>
      </div>

      <div className="gallery-grid">
        {destinations.map((destination) => (
          <div className="gallery-card" key={destination.id}>
            <img
              src={destination.image}
              alt={destination.name}
              className="gallery-image"
            />

            <div className="gallery-content">
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>

              <a
                href={destination.galleryLink}
                className="gallery-btn"
              >
                View Gallery
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;