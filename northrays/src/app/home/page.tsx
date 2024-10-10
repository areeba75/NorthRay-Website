import React from "react";
import styles from "./page.module.scss"; // Import your Sass file
import video from "../../../public/bgvideo.mp4";
import Navbar from "@/components/navbar/Navbar";

const Header = () => {
  return (
    <section className="product-card-section">
      <video className={styles.bvideo} autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Navbar />
      <div className={styles.tagline}>
        <marquee
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "84px", // Corrected to camelCase
            color: "#EDEBEB", // Set the text color
            textTransform: "uppercase", // Corrected to camelCase, removed the semicolon
          }}
          behavior="scroll"
          scrollamount="15"
          scrolldelay="100"
          loop="3"
          height="150"
          width="100%"
          hspace="20"
          vspace="20"
        >
          Welcome to North Rays, a dynamic technology solutions and marketing
          firm dedicated to helping businesses thrive in the digital age.
        </marquee>

        <div className={styles.about}>
          <p>Empowering Businesses in the Digital Age</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
