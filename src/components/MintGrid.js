import React from 'react'

const MintGrid = () => {
    return (
        <section className="mint__grid">
            <div className="container">
                <div className="about__grid">
                    <div data-aos="fade-up" className="aos-init aos-animate details">
                        <h2>Doge Rush Beta-Sale</h2>
                        <p>1 USDT = 200 Doge Rush</p>


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
                        <p>USDT Raised: $0,0 / $2,500,000</p>
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

export default MintGrid
