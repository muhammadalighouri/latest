import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/banner.scss";
import "../scss/glitch.scss";
import Marquee from "react-fast-marquee";
import Navigation from "./Navigation";
import { BannerImages } from "../assests/data";
import { gsap } from "gsap";
import { TimelineLite, Power4 } from "gsap/gsap-core";
import { useNavigate } from "react-router-dom";
const Banner = ({ timeline, ease }) => {
  useEffect(() => {
    AOS.init({});
  }, []);
  const str =
    "OWN YOUR PIECE OF LAND IN THE MOST ANTICIPATED BYOVERSE OPEN WORLD GAME. YOUR LAND WILL GROW RESOURCES NECESSARY FOR PLAYERS TO ROAM THE WORLD AND FIND IT'S TREASURES";
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  const caps = str.split(" ").map(capitalize).join(" ");
  const navigate = useNavigate();
  return (
    <>
      <section className="banner">
        <div className="glitch topBack" >
          <div className="glitch__item"></div>
          <div className="glitch__item"></div>
          <div className="glitch__item"></div>
          <div className="glitch__item"></div>
          <div className="glitch__item"></div>
        </div>
        <div className="container">
          <div className="hero__content">
            <div className="text__container">
              <h2><img src="/images/logo/01-03.png" alt="" /></h2>
              <p>
                OWN YOUR PIECE OF LAND IN THE MOST ANTICIPATED BYOVERSE OPEN
                WORLD GAME. YOUR LAND WILL GROW RESOURCES NECESSARY FOR PLAYERS
                TO ROAM THE WORLD AND FIND IT'S TREASURES
              </p>
            </div>
            <div className="btn__container">
              <div>
                <button onClick={() => navigate("/Mint")}>
                  <span>Buy Now!</span>
                </button>
                <button>
                  <span onClick={() => navigate("/home")}>Opensea!</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
