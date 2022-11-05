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
    name: "Marketing ",
    percent: 10,
    color: "57a4ff"
  },
  {
    name: "Development",
    percent: 5,
    color: "009688"
  },
  {
    name: "Partnerships",
    percent: 55,
    color: "005ece"
  },
  {
    name: "Liquidity",
    percent: 10,
    color: "223fa8"
  },
  {
    name: "Liquidity",
    percent: 15,
    color: "ccc"
  },
  {
    name: "Liquidity",
    percent: 2,
    color: "15216d"
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

  const tokenInfo = [
    {
      name: "Token Supply",
      value: "5000",
      img: '/images/icon/cryptocurrency.png',
    },
    {
      name: "Token Name",
      value: "DR",
      img: '/images/icon/altcoin.png',
    },
    {
      name: "Token Symbol",
      value: "$$$$",
      img: '/images/icon/ethereum.png',
    },
    {
      name: "Taxes",
      value: "1200",
      img: '/images/icon/bank.png',
    },
  ];
  return (
    <section className="token" id="tokenomics">
      <div className="heading">
        <h1 data-aos="fade-down" class="aos-init aos-animate">
          Tokenomics
        </h1>
      </div>
      <div className="container">
        <div className="grid">
          <div className="itemll start">
            <h2>Token Distribution</h2>
            <ul>
              {data.map((item, i) => {
                return (
                  <li key={i}>

                    <div className="line" style={{ background: `#${item.color}` }}>
                      {/* <div
                        className="wid"
                        style={{ width: `${item.percent}%` }}
                      ></div> */}
                    </div>
                    <p> {item.name + ' ' + item.percent + '%'}</p>
                  </li>
                );
              })}
            </ul>
            {/* <ul className="tokenInfo">
              {tokenInfo.map((item, ind) => {
                return (
                  <li>
                    {" "}
                    <img
                      style={{ width: "40px" }}
                      src={item.img}
                      alt=""
                    />{" "}
                    <div>
                      <h4>{item.name}</h4> <span>{item.value}</span>
                    </div>
                  </li>
                );
              })}
            </ul> */}
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

        </div>
      </div>
    </section>
  );
};

export default Token;
