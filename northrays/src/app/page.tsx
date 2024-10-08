import React from "react";
import "./page.scss"; // Import your Sass file

interface PrdProps {
  image: string;
  title: string;
  description: string;
  price: number;
}

const Product = ({ image, title, description, price }: PrdProps) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <div className="product-card__content">
        <h2 className="product-card__title">{title}</h2>
        <p className="product-card__description">{description}</p>
        <span className="product-card__price">${price.toFixed(2)}</span>
      </div>
    </div>
  );
};

const ProductCard = () => {
  return (
    <section className="product-card-section">
      <video className="background-video" autoPlay loop muted>
        <source src={require('../bg-video/bgvideo.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Product
        image="https://via.placeholder.com/150"
        title="Product Title"
        description="This is a great product that will improve your life in two amazing ways."
        price={29.99}
      />
      <Product
        image="https://via.placeholder.com/150"
        title="This is Title"
        description="This is a product that will improve your life in two amazing ways."
        price={1111.99}
      />
    </section>
  );
};

export default ProductCard;
