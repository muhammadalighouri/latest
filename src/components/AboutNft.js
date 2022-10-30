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
                src="https://metawin.xyz/wp-content/themes/metawin/img/roulette-high.png"
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
                <span>
                  Around the year 2066 the AI reached sophistication to the
                  level where it could reproduce it’s physical form (robots) on
                  its own. More and more robots were formed using bolts.
                  Initially, the humans saw this as a blessing. It allowed them
                  to be even more lazy sinking further into gluttony and greed.
                  Plus, the AI robots promised they were still "frenly" and
                  continued making the lives of their human companions.
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
                src="https://metawin.xyz/wp-content/themes/metawin/img/metro-ape-o.jpeg"
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
                <span>
                  Around the year 2066 the AI reached sophistication to the
                  level where it could reproduce it’s physical form (robots) on
                  its own. More and more robots were formed using bolts.
                  Initially, the humans saw this as a blessing. It allowed them
                  to be even more lazy sinking further into gluttony and greed.
                  Plus, the AI robots promised they were still "frenly" and
                  continued making the lives of their human companions.
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
                src="https://images.unsplash.com/photo-1637166185518-058f5896a2e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
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
                <span>
                  Around the year 2066 the AI reached sophistication to the
                  level where it could reproduce it’s physical form (robots) on
                  its own. More and more robots were formed using bolts.
                  Initially, the humans saw this as a blessing. It allowed them
                  to be even more lazy sinking further into gluttony and greed.
                  Plus, the AI robots promised they were still "frenly" and
                  continued making the lives of their human companions.
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
