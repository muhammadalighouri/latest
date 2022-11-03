import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/aboutnft.scss";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
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
          <div className="about__grid first">
            <div
              className="img aos-init aos-animate"
              data-aos="zoom-out-up"
              data-aos-delay="400"
            >
              <img src="/images/sections/A.jpg" alt="" />
            </div>
            <div data-aos="fade-up" className="aos-init aos-animate details">
              <div>
                <div>
                  <span>THE STORY</span>
                </div>
                <h1>WHAT IS DOGE RUSH?</h1>
              </div>
              <p>
                <span>
                  Doge Rush is an endless runner video game. The game starts by
                  tapping the touch screen, while Doge (the game's starter
                  character) or any other NFT character. The strategy is pretty
                  simple; you dash at a very high speed through all the levels
                  while collecting coins along the way. If you complete all
                  levels, you get to keep your coins transferred to your wallet.
                  You can consequently transform your coins into real money. As
                  you play and progress throughout the game, each level has a
                  higher degree of difficulty than its predecessor.
                </span>
                <span>
                  Say goodbye to working endless hours without the element of
                  fun and earn with excitement and a little bit of reflex. Each
                  level becomes more challenging as you play and advance through
                  the game.
                </span>
              </p>
              <div className="btns">
                <a
                  style={{ display: "inline-block" }}
                  href="https://t.me/dogerushchat"
                  target={"_blank"}
                  class="item-desc aos-init aos-animate"
                  data-aos="notific-right"
                >
                  <button>Join Community</button>
                </a>
                <Link
                  style={{ display: "inline-block" }}
                  to="/buy"
                  class="item-desc aos-init aos-animate"
                  data-aos="notific-right"
                >
                  <button>Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="about__grid even">
            <div
              className="img aos-init aos-animate"
              data-aos="zoom-out-up"
              data-aos-delay="400"
            >
              <img src="/images/sections/B.jpg" alt="" />
            </div>
            <div data-aos="fade-up" className="aos-init aos-animate details">
              <div>
                <div>
                  <span>THE STORY</span>
                </div>
                <h1>HOW TO PLAY?</h1>
              </div>
              <p>
                <span>
                  You play as Doge, who dash the subways and tries to escape
                  from elon musk. The player can swipe up, down, left, or right
                  to avoid crashing into oncoming obstacles especially moving
                  subways, poles, tunnel walls and barriers. By swiping rapidly
                  as speed increases, more points can be acquired. A crash
                  results in a game over, but the player can continue running by
                  using keys, or watching an ad. Collect coins to unlock
                  power-ups and special gear to help you go further every time
                  in Doge Rush. Furthermore, coins can be used to unlock
                  different NFT characters and other tools.
                </span>
              </p>
              <div className="btns">
                <a
                  style={{ display: "inline-block" }}
                  href="https://t.me/dogerushchat"
                  target={"_blank"}
                  class="item-desc aos-init aos-animate"
                  data-aos="notific-right"
                >
                  <button>Join Community</button>
                </a>
                <Link
                  style={{ display: "inline-block" }}
                  to="/buy"
                  class="item-desc aos-init aos-animate"
                  data-aos="notific-right"
                >
                  <button>Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="about__grid">
            <div
              className="img aos-init aos-animate"
              data-aos="zoom-out-up"
              data-aos-delay="400"
            >
              <img src="/images/sections/C.jpg" alt="" />
            </div>
            <div data-aos="fade-up" className="aos-init aos-animate details">
              <div>
                <div>
                  <span>THE STORY</span>
                </div>
                <h1>PLAY TO EARN ?</h1>
              </div>
              <p>
                Here’s what makes this game more enticing. Real money!
                <span>
                  You might have spent hours on end playing a game that only
                  took money from you in order to progress. But now you have
                  Doge Rush. Not only will you be addicted to playing it for
                  hours on end, but you will also be earning actual money with
                  it. We all have wanted such a treat, and with Doge Rush, you
                  have it!
                </span>
                <span>
                  The more coins you collect in the game, the further you
                  progress in our daily leaderboard. It will be a tough
                  competition, but the reward of it will be ever so sweet. So
                  play to your heart’s content and make real money.
                </span>
                <span>Easy & Competitive</span>
                <span>It won’t get boring, ever!</span>
              </p>
              <div className="btns">
                <a
                  style={{ display: "inline-block" }}
                  href="https://t.me/dogerushchat"
                  target={"_blank"}
                  class="item-desc aos-init aos-animate"
                  data-aos="notific-right"
                >
                  <button>Join Community</button>
                </a>
                <Link
                  style={{ display: "inline-block" }}
                  to="/buy"
                  class="item-desc aos-init aos-animate"
                  data-aos="notific-right"
                >
                  <button>Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutNft;
