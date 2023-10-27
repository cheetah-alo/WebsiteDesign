import datos from "../datos.json";

/**
 * Carousel component that displays a rotating carousel of images with captions.
 */
export function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {datos.carousel.map((item, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-label={`Slide ${index + 1}`}></button>
        ))}
      </div>

      {/* Carousel Images and Captions */}
      <div className="carousel-inner">
        {datos.carousel.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}>
            {/* Image Overlay with Caption */}
            <div
              style={{
                position: "absolute",
                width: "50%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(0, 0, 0, 0.5)", // Overlay color
              }}>
              <h3
                style={{
                  color: "#fff", // Text color
                  padding: "20px", // Padding
                }}>
                {item.text}
              </h3>
            </div>
            {/* Carousel Image */}
            <img
              src={item.url}
              className="d-block w-100 carousel-image"
              alt={item.alt || "Carousel Image"}
            />
          </div>
        ))}
      </div>

      {/* Carousel Navigation Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
