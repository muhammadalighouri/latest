import React from "react";
import "../scss/info.scss";
import { Parallax } from "react-parallax";
import img from "./info.jpg";
import parra from "./parra1.webp";
import moountaim from "./mallar-mountains-blur.png";
import im32 from "./city_laptop.47381ae9.jpg";
const Info = () => {
  return (
    <>
      <section className="info__outer">
        <section className="info">
          <div className="container">
          <div className="heading" style={{overflow:'hidden'}}>
          <h1 data-aos="fade-down" class="aos-init aos-animate">
            The GAMEPLAY
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-easing="ease-out"
            class="aos-init aos-animate"
          >
            The Gameplay you all have been waiting for!
          </p>
        </div>
            <div className="grid">
              <video src="/images/vid.mp4"></video>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Info;
