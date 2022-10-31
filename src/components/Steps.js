import React from "react";
import "../scss/steps.scss";
const Steps = ({ MintGrid }) => {
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
            <span></span>

            <div className="container">
                <MintGrid />
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
                <div className="fourth">
                    <div className="heading">
                        <h1>Talk to us</h1>
                        <p>
                            Leave your details below and we’ll contact you to discuss purchasing
                            Big Eyes.
                        </p>
                    </div>
                    <div className="grid">
                        <div className="first">
                            <div className="item">
                                <input type="text" placeholder="Enter First Name" />
                            </div>
                            <div className="item">
                                <input type="text" placeholder="Enter Last Name" />
                            </div>
                        </div>
                        <div className="second">
                            <div className="item">
                                <input type="email" placeholder="Enter Email" />
                            </div>
                            <div className="item">
                                <input type="text" placeholder="Contact Number" />
                            </div>
                        </div>
                        <div className="third">
                            <textarea
                                name=""
                                placeholder="Your Message*"
                                id=""
                                cols="30"
                                rows="10"
                            ></textarea>
                        </div>
                        <button>Submit!</button>
                        <p id="p">
                            <input type="checkbox" name="" id="" for='p' />
                            By submitting this form you agree to our Terms and Privacy Policy
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Steps;
