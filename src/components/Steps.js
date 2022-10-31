import React from "react";
import "../scss/steps.scss";
const Steps = () => {
    const info = [
        {
            name: "Gamming NFTs",
            desc: "Latin professor at Hampden-Sydney her College in Virginia, looked up one of the more obscure.",
            img: "https://bithu.uigaint.com/wp-content/uploads/2022/06/aboutus_card_icon1-min.png",
        },
        {
            name: "Play & Earn",
            desc: "Latin professor at Hampden-Sydney her College in Virginia, looked up one of the more obscure.",
            img: "https://bithu.uigaint.com/wp-content/uploads/2022/06/aboutus_card_icon2-min.png",
        },
        {
            name: "Buy ETH or BNB",
            desc: "Latin professor at Hampden-Sydney her College in Virginia, looked up one of the more obscure.",
            img: "https://bithu.uigaint.com/wp-content/uploads/2022/06/aboutus_card_icon3-min.png",
        },
    ];
    return (
        <section className="steps">
            <div className="container">
                <div className="heading">
                    <h1>How to buy</h1>
                </div>
                <div className="first">
                    <div className="start">
                        <h2>Step 1/3</h2>
                        <p>
                            <span>
                                {" "}
                                To begin, make sure you have a MetaMask wallet installed on your
                                browser, or use one of the wallets supported by Wallet Connect
                                (we recommend Trust Wallet).
                            </span>{" "}
                            <span>
                                Purchasing on a desktop browser will give you a smoother
                                purchasing experience. For this we recommend Metamask. If you
                                are purchasing on mobile, we recommend using Trust Wallet and
                                connecting through the in built browser
                            </span>
                        </p>
                    </div>
                    <div className="end">
                        <figure>
                            <img src="/images/Dog Run/side.png" alt="" />
                        </figure>
                    </div>
                </div>
                <div className="second">
                    <h2>Step 2/3</h2>
                    <p>
                        <span>
                            Once you have your preferred wallet provider ready, click “Connect
                            Wallet” and select the appropriate option. For mobile wallet apps
                            you will need to select “Wallet Connect”.{" "}
                        </span>{" "}
                    </p>
                    <div className="grid">
                        {info.map((item, ind) => {
                            return (
                                <div className="item">
                                    <div className="top">
                                        <img src={item.img} alt="" />
                                        <span>{item.name}</span>
                                    </div>
                                    <p>{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="third">
                    <div className="start">
                        <h2>Step 3/3</h2>
                        <p>
                            <span>
                                {" "}
                                To begin, make sure you have a MetaMask wallet installed on your
                                browser, or use one of the wallets supported by Wallet Connect
                                (we recommend Trust Wallet).
                            </span>{" "}
                            <span>
                                Purchasing on a desktop browser will give you a smoother
                                purchasing experience. For this we recommend Metamask. If you
                                are purchasing on mobile, we recommend using Trust Wallet and
                                connecting through the in built browser
                            </span>
                        </p>
                    </div>
                    <div className="end">
                        <figure>
                            <img src="/images/Dog Run/front.png" alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Steps;
