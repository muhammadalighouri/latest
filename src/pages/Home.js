import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Roadmap from "../components/Roadmap";
import Teams from "../components/Teams";
import Faq from "../components/Faq";
import Collection from "../components/Collection";
import AboutNft from "../components/AboutNft";
import Info from "../components/Info";
import Banner from "../components/Banner";
import Marchendise from "../components/Marchendise";
import Partners from "../components/Partners";
import Token from "../components/Token";
const Home = () => {
    return (
        <>
            <Navigation />
            <Banner />
            <AboutNft />
            <div className="top__bg">
                <Roadmap />
                <Token />
                <Teams />
            </div>
            <Partners />

            <div className="bottom__bg">

                <Faq />
                <Footer />
            </div>
        </>
    );
};

export default Home;
