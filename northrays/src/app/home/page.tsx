import React from "react";
import styles from "./page.module.scss"; // Import your Sass file
import video from "../../../public/bgvideo.mp4";
import Navbar from "@/components/navbar/Navbar";

const Header = () => {
  return (
    <>
      <div>
        {/* Header section */}
        <header className={styles.header1}>
          <video className={styles.bvideo} autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.data}>
            <Navbar />
            <div className={styles.tagline}>
              <span>
              Empowering Businesses in the Digital Age
              </span>
              <div className={styles.tag}>
                <p>A dynamic technology solutions and marketing firm dedicated to helping businesses thrive in the digital age.
                </p>
                <button className={styles.heroBtn}>Get In Touch</button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
