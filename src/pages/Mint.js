import React from "react";
import AboutNft from "../components/AboutNft";
import NavigationSec from "../components/NavigationSec";
import Marchendise from "../components/Marchendise";
import Footer from "../components/Footer";
import "../scss/mint.scss";
import Steps from "../components/Steps";
import Holder from "../components/Holder";
import MintGrid from "../components/MintGrid";
import Talk from "../Talk";

const MintContainer = () => {
    return (
        <section className="mint">
            <div className="container"></div>
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
            <Footer />
        </>
    );
};

export default Mint;
