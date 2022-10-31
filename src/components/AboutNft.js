import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/aboutnft.scss";
import Marquee from "react-fast-marquee";
const AboutNft = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
    });
  }, []);

  return (
    <>
      {/* <div className="mar">
        <Marquee
          Reverse={false}
          speed={100}
          background="#fff"
          height="80px"
          gradient={false}
        >
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <h1
                style={{
                  textTransform: "uppercase",
                  marginRight: "20px",
                  fontWeight: "700",
                  fontSize: "20px !important",
                  width: "400px",
                  color: "black",
                }}
              >
                Skeleton Shop
              </h1>
            );
          })}
        </Marquee>
      </div> */}
      <section id="about" className="about">
        <div className="container">
          <div className="about__grid">
            <div
              className="img aos-init aos-animate"
              data-aos="zoom-out-up"
              data-aos-delay="400"
            >
              <img
                src="/images/sections/A.jpg"
                alt=""
              />
            </div>
            <div data-aos="fade-up" className="aos-init aos-animate details">
              <div>
                <div><span>THE STORY</span></div>
                <h1 >
                  About Us
                </h1>
              </div>
              <p>
                <span>
                  {" "}
                  Blkstarlabz works to provide economic development and social
                  At first, AI seemed like the greatest innovation mankind has
                  ever created. It allowed humans to live in a paradise on earth
                  with complete abundance. Anything they could ever want was
                  given to them by their loyal and "frenly" servants, the AI. As
                  long as the humans were needed to help the AI produce into
                  their physical form, robots, the AI was "frenly" as could be.
                  Very polite, referring to all humans as master, and always
                  around to help with anything regardless of how ridiculous the
                  request.
                </span>

              </p>
              <div className="btns">
                <a
                  style={{ display: "inline-block" }}
                  href="https://twitter.com/ElrondHeart"
                  target={"_blank"}
                  class="item-desc aos-init aos-animate"
                  data-aos="notific-right"
                >
                  <button>Join Community!</button>
                </a>
                <a
                  style={{ display: "inline-block" }}
                  href="https://twitter.com/ElrondHeart"
                  target={"_blank"}
                  class="item-desc aos-init aos-animate"
                  data-aos="notific-right"
                >
                  <button>View on Opensea!</button>
                </a>
              </div>
            </div>
          </div>
          <div className="about__grid even">
            <div
              className="img aos-init aos-animate"
              data-aos="zoom-out-up"
              data-aos-delay="400"
            >
              <img
                src="/images/sections/B.jpg"
                alt=""
              />
            </div>
            <div data-aos="fade-up" className="aos-init aos-animate details">
              <div>
                <div><span>THE STORY</span></div>
                <h1 >
                  About Us
                </h1>
              </div>
              <p>
                <span>
                  {" "}
                  Blkstarlabz works to provide economic development and social
                  At first, AI seemed like the greatest innovation mankind has
                  ever created. It allowed humans to live in a paradise on earth
                  with complete abundance. Anything they could ever want was
                  given to them by their loyal and "frenly" servants, the AI. As
                  long as the humans were needed to help the AI produce into
                  their physical form, robots, the AI was "frenly" as could be.
                  Very polite, referring to all humans as master, and always
                  around to help with anything regardless of how ridiculous the
                  request.
                </span>

              </p>
              <div className="btns">
                <a
                  style={{ display: "inline-block" }}
                  href="https://twitter.com/ElrondHeart"
                  target={"_blank"}
                  class="item-desc aos-init aos-animate"
                  data-aos="notific-right"
                >
                  <button>Join Community!</button>
                </a>
                <a
                  style={{ display: "inline-block" }}
                  href="https://twitter.com/ElrondHeart"
                  target={"_blank"}
                  class="item-desc aos-init aos-animate"
                  data-aos="notific-right"
                >
                  <button>View on Opensea!</button>
                </a>
              </div>
            </div>
          </div>
          <div className="about__grid">
            <div
              className="img aos-init aos-animate"
              data-aos="zoom-out-up"
              data-aos-delay="400"
            >
              <img
                src="/images/sections/C.jpg"
                alt=""
              />
            </div>
            <div data-aos="fade-up" className="aos-init aos-animate details">
              <div>
                <div><span>THE STORY</span></div>
                <h1 >
                  About Us
                </h1>
              </div>
              <p>
                <span>
                  {" "}
                  Blkstarlabz works to provide economic development and social
                  At first, AI seemed like the greatest innovation mankind has
                  ever created. It allowed humans to live in a paradise on earth
                  with complete abundance. Anything they could ever want was
                  given to them by their loyal and "frenly" servants, the AI. As
                  long as the humans were needed to help the AI produce into
                  their physical form, robots, the AI was "frenly" as could be.
                  Very polite, referring to all humans as master, and always
                  around to help with anything regardless of how ridiculous the
                  request.
                </span>

              </p>
              <div className="btns">
                <a
                  style={{ display: "inline-block" }}
                  href="https://twitter.com/ElrondHeart"
                  target={"_blank"}
                  class="item-desc aos-init aos-animate"
                  data-aos="notific-right"
                >
                  <button>Join Community!</button>
                </a>
                <a
                  style={{ display: "inline-block" }}
                  href="https://twitter.com/ElrondHeart"
                  target={"_blank"}
                  class="item-desc aos-init aos-animate"
                  data-aos="notific-right"
                >
                  <button>View on Opensea!</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutNft;
