import React from "react";
import styles from "./page.module.scss"; // Import your Sass file
import video from "../../public/bgvideo.mp4";

const ProductCard = () => {
  return (
    <section className="product-card-section">
      <video className={styles.bvideo} autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <marquee
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "84px", // Corrected to camelCase
          color: "#EDEBEB", // Set the text color
        }}
        behavior="scroll"
        scrollamount="10"
        scrolldelay="100"
        loop="3"
        height="150"
        width="100%"
        hspace="20"
        vspace="20"
      >
        Empowering Businesses in the Digital Age
      </marquee>
      <div className={styles.about}>
        <h1>
          Welcome to North Rays, a dynamic technology solutions and marketing
          firm dedicated to helping businesses thrive in the digital age.
        </h1>
      </div>
    </section>
  );
};

export default ProductCard;
