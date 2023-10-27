import React from "react";
import { Header } from "./Header.jsx";
import { Carousel } from "./Carousel.jsx";
import { Prices } from "./Prices.jsx";
import { Footer } from "./Footer.jsx";

/**
 * Home Component
 * This component represents the main page of the website.
 */
export function Home() {
  return (
    <div>
      {/* Render the Header component */}
      <Header></Header>

      {/* Render the Carousel component */}
      <Carousel></Carousel>

      {/* Render the Prices component */}
      <Prices></Prices>

      {/* Render the Footer component */}
      <Footer></Footer>
    </div>
  );
}
