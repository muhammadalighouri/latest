import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/roadmap.scss";
import { roadmap } from "../assests/data";

const Roadmap = () => {
  const [first, setfirst] = useState(null);
  const sec = useRef();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
    // how to check page distance from top
  }, []);

  window.addEventListener("scroll", () => {
    const distance = window.scrollY;
    console.log(distance);
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 2100 && scrollTop < 3700) {
      setfirst(scrollTop);
    }

    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrolled = scrollTop / (scrollHeight - clientHeight);
  });

  return (
    <>
      <section id="roadmap" className="roadmap" ref={sec}>
        <div className="heading" style={{ overflow: 'hidden' }}>
          <h1 data-aos="fade-down" class="aos-init aos-animate">
            THE ROADMAP
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-easing="ease-out"
            class="aos-init aos-animate"
          >
            The Roadmap you all have been waiting for!
          </p>
        </div>
        <div className="container">
          <div className="roadmap__grid">
            <div className="end">
              {roadmap.map((item, i) => {
                return (
                  <div className="item" data-aos='fade-up'>
                    <h2>Phase {item.id}</h2>
                    <ul>
                      {item.points.map((item, i) => {
                        return <li key={i}>{item}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
            <div className="start">
              <div className="img">
                <img
                  src="https://images.unsplash.com/photo-1637166185518-058f5896a2e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                  width="100%"
                  alt=""

                />
              </div>
              {/* <div className="img">
                <img
                  data-aos="zoom-out-up"
                  data-aos-easing="ease-out"
                  src="/images/characters/add_character.png"
                  width="100%"
                  alt=""
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
