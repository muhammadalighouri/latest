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
                        <h2>Doge Rush Beta-Sale</h2>
                        <p>1 USDT = 200 Doge Rush</p>
                        <p style={{ margin: '0 0 25px  0' }}>USDT Raised: $0,0 / $2,500,000</p>

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
                                            <img src="/images/1027.png" alt="" />
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
                                            <img src="/images/01-05.png" alt="" />
                                        </div>
                                        DR
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
    window.scrollTo(0, 0)
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
