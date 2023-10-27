# 06 Carousel Componet

> codecripto | From Web2 to Web 3 | Project Web Design | by JackyB

***

### Creating the Footer Component

1. Visit the Bootstrap Carousel documentation page: [Bootstrap Carousel Documentation](https://getbootstrap.com/docs/5.3/components/carousel/)
2. Find the basic example that looks similar to your design requirements. It should be the code for a carousel with 3 images.
3. Copy the HTML code for the carousel example.
4. In the component created called `Carousel.jsx` paste the code of the carousel chosen on the Bootstrap website.
5. Change `"class"` attributes to "className" in the JSX code to make it compatible with React.
6. Place the images to use in the carousel in a directory within the project. For example, you can create a folder named `images` and put your image files there.
7. Create a `datos.json` file in your project to store the data for each slide in the carousel. Each slide should have a `test`, `url`, and `alt` property. For example:

```json
{
 "carousel": [
    {
      "text": "Looking for an asset",
      "url": "./src/assets/images/pic1.jpg",
      "alt": "random"
    },
    {
      "text": "Expand your limits",
      "url": "./src/assets/images/pic2.jpg",
      "alt": "random"
    },
    {
      "text": "Make growth your knowledge and portafolio",
      "url": "./src/assets/images/pic3.jpg",
      "alt": "random"
    }
  ]
}
```

8. In the `Carousel.jsx` file, import the JSON data and the images you prepared:
9. Replace the content of each carousel slide in your `Carousel.jsx` file with a dynamic loop that populates the slides with data from `datos.json`:

```javascript

import datos from "../datos.json";

export function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
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

      <div className="carousel-inner">
        {datos.carousel.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <div
              style={{
                position: "absolute",
                width: "50%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(0, 0, 0, 0.5)", 
              }}>
              <h3
                style={{
                  color: "#fff", // Text color
                  padding: "20px", // Padding
                }}>
                {item.text}
              </h3>
            </div>
            <img
              src={item.url}
              className="d-block w-100 carousel-image"
              alt={item.alt || "Carousel Image"}
            />
          </div>
        ))}
      </div>

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


```

<figure><img src="../.gitbook/assets/Screenshot 2023-10-27 at 11.36.15 PM.png" alt=""><figcaption></figcaption></figure>

### Customize and Style

1. Customize the appearance of your website using Bootstrap classes and CSS.
2. Adjust the styling of components, fonts, and layout as needed.
3. Test the website to ensure it looks and functions correctly.
