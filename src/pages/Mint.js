import React from "react";
import AboutNft from "../components/AboutNft";
import NavigationSec from "../components/NavigationSec";
import Marchendise from "../components/Marchendise";
import Footer from "../components/Footer";
import "../scss/mint.scss";
import Steps from "../components/Steps";
import Holder from "../components/Holder";
const Mint = () => {
    return (
        <>
            <NavigationSec text="CONNECT WALLET" />
            <section className="mint">
                <div className="container">
                    <div className="about__grid">
                        <div data-aos="fade-up" className="aos-init aos-animate details">
                            <div>
                                <div className="payment__header">
                                    <h2
                                        style={{
                                            fontWeight: "600",
                                            lineHeight: "40px",
                                            marginBlockStart: "0px",
                                            marginBlockEnd: "0px",
                                            fontSize: "38px",
                                            color: "rgb(255, 255, 255)",
                                        }}
                                    >
                                        MINT YOUR NFT
                                    </h2>
                                    <div className="supply">
                                        <p
                                            style={{
                                                color: "rgb(201, 210, 215)",
                                                fontWeight: "400",
                                                fontSize: "19px",
                                            }}
                                        >
                                            TOTAL SUPPLY : 3333
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="payment__info"
                                    style={{
                                        display: "flex",
                                        marginTop: "15px",
                                        marginBottom: "15px",
                                        padding: "12px",
                                        borderWidth: "2px",
                                        borderStyle: "solid",
                                        borderColor: "#0085ff",
                                        borderImage: "initial",
                                    }}
                                >
                                    <img
                                        style={{
                                            width: "200px",
                                            height: "200px",
                                        }}
                                        src="https://mint.monkainft.com/static/media/aura.4f891d18.gif"
                                        alt=""
                                    />
                                    <div class="payment-info-text">
                                        <p>Price Per NFT</p>
                                        <h5>0.08 ETH</h5>
                                        <p>LIVE NOW!</p>
                                    </div>
                                </div>
                                <div className="price">
                                    <div id="ape-total">
                                        <p>PRICE</p>
                                        <h5>0.08 ETH</h5>
                                    </div>
                                </div>
                                <div className="btns">
                                    <button>CONNECT WALLET!</button>
                                </div>
                                <p
                                    style={{
                                        color: "rgb(201, 210, 215)",
                                        fontWeight: "400",
                                        fontSize: "19px",
                                        marginTop: "10px",
                                    }}
                                >
                                    Connect To Ethereum Wallet
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Steps />
            <AboutNft />
            <Holder/>
            <Marchendise />
            <Footer />
        </>
    );
};

export default Mint;
