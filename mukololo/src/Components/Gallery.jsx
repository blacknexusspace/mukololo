import React from "react";
import "../assets/styles/Gallery.css";

function Gallery() {
  const destinations = [
    {
      id: 1,
      name: "Port Elizabeth Gqeberha, Eastern Cape ",
      image:
        "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f",
      description: "Discover the beauty of Port Elizabeth",
      galleryLink: "/gallery/paris",
    },
    {
      id: 2,
      name: "Cape Town, South Africa",
      image:
        "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e",
      description: "Experience breathtaking mountains and beaches.",
      galleryLink: "/gallery/capetown",
    },
    {
      id: 3,
      name: "Dubai, UAE",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      description: "Explore luxury, innovation, and desert adventures.",
      galleryLink: "/gallery/dubai",
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