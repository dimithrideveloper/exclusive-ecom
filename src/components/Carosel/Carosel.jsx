import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carosel.css";
import { Carousel } from "react-responsive-carousel";

const products = [
  {
    id: 1,
    imageUrl: "/assets/banner1.png",
    title: "Summer Collection",
    description: "Get beach-ready with our latest styles!",
    ctaText: "Shop Now",
    ctaLink: "/shop/summer-collection",
  },
  {
    id: 2,
    imageUrl: "/assets/banner1.png",
    title: "Summer Collection",
    description: "Get beach-ready with our latest styles!",
    ctaText: "Shop Now",
    ctaLink: "/shop/summer-collection",
  },
  {
    id: 3,
    imageUrl: "/assets/banner1.png",
    title: "Summer Collection",
    description: "Get beach-ready with our latest styles!",
    ctaText: "Shop Now",
    ctaLink: "/shop/summer-collection",
  },
];
export default function Carosel() {
  return (
    <Carousel
      className="carosel"
      showArrows={false} // Enable navigation arrows
      autoPlay={true} // Enable autoplay
      infiniteLoop={true} // Loop through slides infinitely
      showThumbs={false} // Hide thumbnail navigation
      showStatus={false} // Hide status indicator
      emulateTouch={true} // Enable touch support for mobile devices
      stopOnHover={true} // Pause autoplay on hover
      interval={3000} // Autoplay interval in milliseconds
    >
      {products.map((product) => (
        <div key={product.id} className="product-banner">
          <img src={product.imageUrl} alt={product.title} />
          {/* <div className="product-banner-content">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <a href={product.ctaLink} className="cta-button">
              {product.ctaText}
            </a>
          </div> */}
        </div>
      ))}
    </Carousel>
  );
}
