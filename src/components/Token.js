import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/token.scss";
import { FaCheckCircle } from "react-icons/fa";
import Chart from "./Chart";
import { Parallax, Background } from "react-parallax";
// import img from "./galaxy5.png";
import { gsap } from "gsap";
import { TimelineLite, Power3 } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import { BsArrowRight } from "react-icons/bs";
gsap.registerPlugin(ScrollTrigger);
// const data = [2, 15, 3, 10, 12, 8, 4, 40];
const data = [
  {
    name: "Marketing and Advertising: 10%",
    percent: 10,
  },
  {
    name: "Development: 3%",
    percent: 3,
  },
  {
    name: "Partnerships: 15%",
    percent: 15,
  },
  {
    name: "Liquidity: 2%",
    percent: 2,
  },
];

const data2 = [
  {
    name: "Accounting & Legal: 12%",
    percent: 12,
  },
  {
    name: "SMM Community Leaders: 8%",
    percent: 8,
  },
  {
    name: "Audits: 10%",
    percent: 10,
  },
  {
    name: "Distribution: 40%",
    percent: 40,
  },
];
const Token = ({ ease }) => {
  const ite = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    gsap.from(".wid", 2, {
      width: 0,
      scrollTrigger: {
        trigger: ".itemll",
        start: "top 110%",
        end: "bottom 200% ",
        toggleActions: "restart complete reverse reset",
      },
    });
    gsap.to(".mid-", 3, {
      scale: 1,
      ease: ease,
      scrollTrigger: {
        trigger: ".itemll",
        start: "top 110%",
        end: "bottom 200% ",
        toggleActions: "restart complete reverse reset",
      },
    });
  }, []);

  const tokens = [
    {
      name: "ETH Token",
      img: "/images/icon/chainlink.png",
      details: "",
    },
    {
      name: "ETH Token",
      img: "/images/icon/bitcoin.png",
      details: "",
    },
    {
      name: "ETH Token",
      img: "/images/icon/filecoin.png",
      details: "",
    },
    {
      name: "ETH Token",
      img: "/images/icon/tether.png",
      details: "",
    },
    {
      name: "ETH Token",
      img: "/images/icon/dogecoin.png",
      details: "",
    },
    // '/images/icon/ppc.png',
  ];
  return (
    <section className="token" id="tokenomics">
      <div className="container">
        <div className="grid">
          <div className="itemll start">
            <h2 data-aos="fade-down" class="aos-init aos-animate">
              Tokenomics
            </h2>
            <p>
              <span>
                Contract code fully audited by Solidity Finance and shown to be
                100% secure. Team fully verified by CoinSniper to ensure
                anti-rug and complete project security.
              </span>
              <span>
                You can buy direct using USDT, ETH or BNB. After the public sale
                ends, you'll claim your purchased Big Eyes using the claim page.
              </span>
            </p>
            <div className="btns">
              {
                tokens.map((item, i) => {
                  return (
                    <div className="btn">
                      <img src={item.img} alt="" />
                    </div>
                  )
                })
              }
            </div>
            <div className="normal__btn">
              <button>
                Etherscan <BsArrowRight />
              </button>
              <button>
                Liquidity Lock <BsArrowRight />
              </button>
            </div>
          </div>
          <div className="itemll mid-" ref={ite}>
            <Chart />
          </div>
          <div className="itemll">
            <ul>
              {data2.map((item, i) => {
                return (
                  <li key={i}>
                    <p> {item.name}</p>
                    <div className="line">
                      <div
                        className="wid"
                        style={{ width: `${item.percent}%` }}
                      ></div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token;
