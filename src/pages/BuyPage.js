import React from "react";
import AboutNft from "../components/AboutNft";
import NavigationSec from "../components/NavigationSec";
import Marchendise from "../components/Marchendise";
import Footer from "../components/Footer";
import "../scss/mint.scss";
import Steps from "../components/BuyPageInfo";
import Holder from "../components/Holder";
import MintGrid from "../components/MintGrid";
import Talk from "../Talk";
import BuyPageInfo from "../components/BuyPageInfo";

const MintContainer = () => {
    return (
        <section className="mint">
            <div className="container"></div>
        </section>
    );
};

const BuyPage = () => {
    window.scrollTo(0, 0)
    return (
        <>
            <NavigationSec text="CONNECT WALLET" />
            <MintContainer />

            <BuyPageInfo MintGrid={MintGrid} />
            <Footer />
        </>
    );
};

export default BuyPage;
