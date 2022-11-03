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
        background: 'red'
    }),
};
const investment = [
    {
        value: ' $0 - $5k',
        label: ' $0 - $5k',
    },
    {
        value: '$5k - $10k',
        label: '$5k - $10k',
    },
    {
        value: '$10k - $25k',
        label: '$10k - $25k',
    },

    {
        value: '$25k - $50k',
        label: '$25k - $50k',
    },
    {
        value: '  $50k +',
        label: '  $50k +',
    },
]
const time = [
    {
        value: ' Morning',
        label: ' Morning',
    },
    {
        value: 'Afternoon',
        label: 'Afternoon',
    },
    {
        value: '',
        label: 'Evening',
    },

]

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
            desc: "Once you have enough ETH in your wallet (if you don't have ETH or USDT, choose option 1 to buy ETH first), you can now exchange your ETH for DR. Enter the amount of DR you wish to buy (minimum 1,000) and click Exchange ETH. Your wallet provider will ask you to confirm the transaction and will also show you the gas cost.",
            img: "/images/icon/7147157.png",
        },
        {
            name: "Buy with USDT",
            desc: "Before you start trading, make sure you have at least $30 USDT in your wallet. Enter the amount of DR you wish to purchase (minimum 1,000). Click Exchange USDT. You will then be asked to approve the purchase twice. The first approval is for the USDT contract and the second approval is for the transaction amount. Please make sure you go through two approval steps to complete the transaction.",
            img: "/images/icon/8193873.png",
        },
        {
            name: "Buy ETH",
            desc: "If you don’t have enough ETH in your wallet to make a purchase, you can use our onramping partner, Transak, in order to buy ETH directly using your card or via a bank transfer. Simply choose your purchase method, go through their simple KYC flow and you’ll be able to make a purchase directly in the widget.",
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
                        After the pre-sale is over, you will be able to claim your DR
                        tokens. We'll post the details closer, but you'll need to visit the
                        main site{" "}
                        <a
                            href="https://dogerush.io/buy"
                            style={{ color: "#0fdaf4" }}
                            target={"_blank"}
                        >
                            https://dogerush.io/buy
                        </a>{" "}
                        and click the 'Claim' button.
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
        return (
            {
                label: `${item.name} (${item.dial_code})`,
                value: `${item.name} (${item.dial_code})`,

            }
        )

    })


    console.log('person', newObj);
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
                <h1 >
                    100% Secure
                </h1>
                <p

                >
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
