import React from "react";
import "./page.scss"; // Import your Sass file
import video from './bg-video/bgvideo.mp4'
const ProductCard = () => {
  return (
    <section>
      <video className="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Product
        image="https://via.placeholder.com/150"
        title="Product Title"
        description=" This is a great product that will improve your life in two amazing
        ways."
        price={29.99}
      />
      <Product
        image="https://via.placeholder.com/150"
        title="This is Title"
        description=" This is a  product that will improve your life in two amazing
      ways."
        price={1111.99}
      />
    </section>
  );
};

export default ProductCard;

interface prdprops {
  image: string;
  title: string;
  description: string;
  price: number;
}
const Product = ({ image, title, description, price }: prdprops) => {
  return (
    <div className="product-card">
      <img
        src={image} // Replace with your image URL
      />
      <div className="product-card__content">
        <h2 className="product-card__title">{title}</h2>
        <p className="product-card__description">{description}</p>
        <span className="product-card__price">${price}</span>
      </div>
    </div>
  );
};
