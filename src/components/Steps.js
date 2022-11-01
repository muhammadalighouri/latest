import React from "react";
import Select from 'react-select'


import { CgCopyright } from "react-icons/cg";
import { MdOutlineContentCopy } from "react-icons/md";
import "../scss/steps.scss";
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
const customStyles = {
    menu: (provided, state) => ({

        width: state.selectProps.width,
        borderBottom: '1px dotted pink',
        color: state.selectProps.menuColor,
        padding: 20,
    }),


}
const Step1 = () => {
    return (
        <div className="first">
            <div className="start">
                <h2>Step 1/3</h2>
                <p>
                    <span>
                        {" "}
                        To begin, make sure you have a MetaMask wallet installed on your
                        browser, or use one of the wallets supported by Wallet Connect (we
                        recommend Trust Wallet).
                    </span>{" "}
                    <span>
                        Purchasing on a desktop browser will give you a smoother purchasing
                        experience. For this we recommend Metamask. If you are purchasing on
                        mobile, we recommend using Trust Wallet and connecting through the
                        in built browser
                    </span>
                </p>
            </div>
            <div className="end">
                <figure>
                    <img src="/images/Dog Run/side.png" alt="" />
                </figure>
            </div>
        </div>
    );
};
const Step2 = () => {
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
        <div className="second">
            <h2>Step 2/3</h2>
            <p>
                <span>
                    Once you have your preferred wallet provider ready, click “Connect
                    Wallet” and select the appropriate option. For mobile wallet apps you
                    will need to select “Wallet Connect”.{" "}
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
    );
};
const Step3 = () => {
    return (
        <div className="third">
            <div className="start">
                <h2>Step 3/3</h2>
                <p>
                    <span>
                        {" "}
                        To begin, make sure you have a MetaMask wallet installed on your
                        browser, or use one of the wallets supported by Wallet Connect (we
                        recommend Trust Wallet).
                    </span>{" "}
                    <span>
                        Purchasing on a desktop browser will give you a smoother purchasing
                        experience. For this we recommend Metamask. If you are purchasing on
                        mobile, we recommend using Trust Wallet and connecting through the
                        in built browser
                    </span>
                </p>
            </div>
            <div className="end">
                <figure>
                    <img src="/images/Dog Run/front.png" alt="" />
                </figure>
            </div>
        </div>
    );
};
const SendMessage = () => {
    return (
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
                    <Select placeholder='Country Code' options={options} />
                    <div className="item">
                        <input type="text" placeholder="Enter Contact Number" />
                    </div>
                    <Select placeholder='Select a time to contact' options={options} />
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
                    <input type="checkbox" name="" id="" for="p" />
                    By submitting this form you agree to our Terms and Privacy Policy
                </p>
            </div>
        </div>
    );
};
const TokenInfo = () => {
    return (
        <div className="six">
            <div className="heading">
                <h1>Contract</h1>
                <p>
                    Leave your details below and we’ll contact you to discuss purchasing
                    Big Eyes.
                </p>
            </div>
            <div className="grid">
                <div className="first">
                    <div className="item">
                        <input
                            type="text"
                            value={"0xc8De43Bfe33FF496Fa14c270D9CB29Bda196B9B5"}
                            placeholder="Address"
                        />
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    "0xc8De43Bfe33FF496Fa14c270D9CB29Bda196B9B5"
                                );
                            }}
                        >
                            Copy <MdOutlineContentCopy />
                        </button>
                    </div>
                </div>
                <div className="second">
                    <div className="item">
                        <input type="number" value={"18"} placeholder="Token" />
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText("18");
                            }}
                        >
                            Copy <MdOutlineContentCopy />{" "}
                        </button>
                    </div>
                    <div className="item">
                        <input type="text" value={"BIG"} placeholder="Token Symbol" />
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText("BIG");
                            }}
                        >
                            Copy <MdOutlineContentCopy />
                        </button>
                    </div>
                </div>

                <button>Submit!</button>
            </div>
        </div>
    );
};
const Whitepaper = () => {
    return (
        <div className="fifth">
            <div className="heading" style={{ overflow: "hidden" }}>
                <h1 data-aos="fade-down" class="aos-init aos-animate">
                    100% Secure
                </h1>
                <p
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-easing="ease-out"
                    class="aos-init aos-animate"
                >
                    RobotEra building a sandbox-like planet-rebuilding metaverse. You will
                    become a robot, managing your own land and participating in the
                    creationof the world. It can also acquire resources from the land,
                    create robot companions. Here, create everything you can imagine and
                    start a new era with other robots.
                </p>
                <div className="btn__container">
                    <button>Audit</button>
                    <button> Whitepaper</button>
                    <button>KYC</button>
                </div>
            </div>
        </div>
    );
};
const Steps = ({ MintGrid }) => {
    return (
        <section className="steps">
            <span></span>

            <div className="container">
                <MintGrid />
                <div className="heading">
                    <h1>How to buy</h1>
                </div>
                <Step1 />
                <Step2 />
                <Step3 />
                <Whitepaper />
                <TokenInfo />
                <SendMessage />
            </div>
        </section>
    );
};

export default Steps;
