import React from "react";
import AboutNft from "../components/AboutNft";
import NavigationSec from "../components/NavigationSec";
import Marchendise from "../components/Marchendise";
import Footer from "../components/Footer";
import "../scss/mint.scss";
import Steps from "../components/Steps";
import Holder from "../components/Holder";
import Talk from "../Talk";

const MintContainer = () => {
    return (
        <section className="mint">
            <div className="container"></div>
        </section>
    );
};
const MintGrid = () => {
    return (
        <section className="mint__grid">
            <div className="container">
                <div className="about__grid">
                    <div data-aos="fade-up" className="aos-init aos-animate details">
                        <h2>Stage 6 has started!</h2>
                        <p>1 USDT = 3589.74 Big Eyes</p>

                        <div>
                            <div className="payment__header">
                                <div className="supply"></div>
                            </div>
                            <div className="payment__info">
                                <div className="top">
                                    <span>To</span>
                                    <span>Balance: (Wallet not connected)</span>
                                </div>
                                <div className="middle">
                                    <div className="start">
                                        <div className="logo">
                                            <img src="/images/ethereum.png" alt="" />
                                        </div>
                                        ETH
                                    </div>
                                    <div className="end">
                                        <button>Max</button>
                                        <button>Half</button>
                                    </div>
                                </div>
                                <div className="bottom"></div>
                            </div>
                            <div className="swap">
                                <div className="img">
                                    <img src="/images/msic-swap.svg" alt="" />
                                </div>
                            </div>
                            <div className="payment__info">
                                <div className="top">
                                    <span>To</span>
                                    <span>Balance: (Wallet not connected)</span>
                                </div>
                                <div className="middle">
                                    <div className="start">
                                        <div className="logo">
                                            <img
                                                src="https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png"
                                                alt=""
                                            />
                                        </div>
                                        ETH
                                    </div>
                                    <div className="end">
                                        <button>Max</button>
                                        <button>Half</button>
                                    </div>
                                </div>
                                <div className="bottom"></div>
                            </div>

                            <div className="btns">
                                <button>CONNECT WALLET!</button>
                            </div>
                            <p
                                style={{
                                    color: "rgb(201, 210, 215)",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    marginTop: "16px",
                                }}
                            >
                                Connect To Ethereum Wallet
                            </p>
                        </div>
                    </div>
                    <div className="img">
                        <img src="/images/Dog Run/front.png" alt="" />
                        <p>USDT Raised: $9,299,227.83 / $10,700,000.00</p>
                        <div className="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
const Mint = () => {
    return (
        <>
            <NavigationSec text="CONNECT WALLET" />
            <MintContainer />

            <Steps MintGrid={MintGrid} />
            {/* <Talk /> */}
            {/* <Holder/> */}
            {/* <Marchendise /> */}
            <Footer />
        </>
    );
};

export default Mint;
