import React from "react";
import Select from "react-select";
import { CgCopyright } from "react-icons/cg";
import { MdOutlineContentCopy } from "react-icons/md";
import { codes } from "../assests/Code";
import "../scss/steps.scss";
const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];
const customStyles = {
    menu: (provided, state) => ({
        width: state.selectProps.width,
        borderBottom: "1px dotted pink",
        color: state.selectProps.menuColor,
        padding: 20,
        background: "red",
    }),
};
const investment = [
    {
        value: " $0 - $5k",
        label: " $0 - $5k",
    },
    {
        value: "$5k - $10k",
        label: "$5k - $10k",
    },
    {
        value: "$10k - $25k",
        label: "$10k - $25k",
    },

    {
        value: "$25k - $50k",
        label: "$25k - $50k",
    },
    {
        value: "  $50k +",
        label: "  $50k +",
    },
];
const time = [
    {
        value: " Morning",
        label: " Morning",
    },
    {
        value: "Afternoon",
        label: "Afternoon",
    },
    {
        value: "",
        label: "Evening",
    },
];

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
                        in built browser.
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
            name: "Buy with ETH",
            desc: "Once you have sufficient ETH in your wallet (if you do not have ETH, USDT, please read option 1 first), you can now swap your ETH for Doge Rush. Type in the amount of Doge Rush you wish to purchase ($15 minimum) and then click “Buy with ETH” or “Buy with USDT”. Your wallet provider will ask you to confirm the transaction and will also show you the cost of gas.",
            img: "/images/icon/8193873.png",
        },
        {
            name: "Buy with USDT",
            desc: "Please ensure you have at least $20 of USDT in your wallet before commencing the transaction. Type in the amount of Doge Rush you wish to purchase ($15 minimum). Click “Convert USDT”. You will then be asked to approve the purchase TWICE. The first approval is for the USDT contract and the second is for the transaction amount. Please ensure you go through both approval steps in order to complete the transaction.",
            img: "/images/icon/8193886.png",
        },
    ];
    return (
        <div className="second">
            <h2>Step 2/3</h2>
            <p>
                <span>
                    Once you have your preferred wallet provider ready, click “Connect
                    Wallet” and select the appropriate option. For mobile wallet apps you
                    will need to select “Wallet Connect”.
                </span>
                <span>You will then have 3 options:</span>
            </p>
            <div className="grid">
                <div className="item">
                    <div className="top">
                        <img src="/images/icon/7147157.png" alt="" />
                        <span>Buy ETH with card</span>
                    </div>
                    <p>
                        Visit&nbsp;
                        <a
                            style={{ color: "#0fdaf4" }}
                            target={"_blank"}
                            href="https://www.moonpay.com/buy"
                        >
                            https://www.moonpay.com/buy
                        </a>
                        &nbsp; this will allow you to purchase ETH that will be sent to your
                        wallet. You will then be able to use this ETH to purchase Doge Rush.
                        Visit&nbsp;
                        <a
                            style={{ color: "#0fdaf4" }}
                            target={"_blank"}
                            href="https://www.moonpay.com/buy"
                        >
                            https://www.moonpay.com/buy
                        </a>
                        &nbsp; to begin and follow the on screen steps. We recommend
                        purchasing a minimum of $20 worth of ETH to cover the minimum Doge
                        Rush purchase.
                    </p>
                </div>
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
                        Once the presale has concluded, you will be able to claim your Doge
                        Rush tokens. We will release details closer to the time, however you
                        will need to visit the main site: {" "}
                        <a
                            href="https://dogerush.io/ "
                            style={{ color: "#0fdaf4" }}
                            target={"_blank"}
                        >
                            https://dogerush.io/buy
                        </a>{" "}
                        and click on the ‘claim’ button.
                    </span>{" "}
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
    const newObj = codes.map((item, i) => {
        return {
            label: `${item.name} (${item.dial_code})`,
            value: `${item.name} (${item.dial_code})`,
        };
    });

    console.log("person", newObj);
    return (
        <div className="fourth">
            <div className="heading">
                <h1>Talk to us</h1>
                <p>
                    Leave your details below and we’ll contact you to discuss purchasing
                    Doge Rush.
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
                    <Select placeholder="Country Code" options={newObj} />
                    <div className="item">
                        <input type="text" placeholder="Enter Contact Number" />
                    </div>
                    <Select placeholder="Select a time to contact" options={time} />
                </div>
                <div className="third">
                    <Select placeholder="Enter Investment Budget" options={investment} />
                    <button>Submit!</button>
                </div>

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
                <h1>Doge Rush Contract</h1>
                <p>
                    Use the contract information below to add the Doge Rush token to your
                    wallet.
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
            </div>
        </div>
    );
};

const Whitepaper = () => {
    return (
        <div className="fifth">
            <div className="heading" style={{ overflow: "hidden" }}>
                <h1>100% Secure</h1>
                <p>
                    Contract fully audited by Solidity Finance and shown to be 100%
                    secure. Team fully verified by CoinSniper to ensure anti-rug and
                    complete project security.
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
