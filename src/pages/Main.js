import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nav } from "../assests/data";
import "../scss/main.scss";
import "../scss/glitch.scss";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaRedditAlien } from "react-icons/fa";
import { links } from "../assests/data";
import { FaInstagram } from "react-icons/fa";
import { DiscFullRounded, Instagram, Twitter } from "@material-ui/icons";
import NavigationSec from "../components/NavigationSec";
const Main = () => {
    const [navToggler, setNavToggler] = useState(false);
    function barBtn() {
        setNavToggler(!navToggler);
    }
    const navigate = useNavigate();
    return (
        <>
            <section className="main">
                <div className="glitch topBack" >
                    <div className="glitch__item"></div>
                    <div className="glitch__item"></div>
                    <div className="glitch__item"></div>
                    <div className="glitch__item"></div>
                    <div className="glitch__item"></div>
                </div>
                <NavigationSec text={'JOIN NOW!'} />
                <div className="container">
                    <div className="grid">
                        <div className="btns__container">
                            <button onClick={() => navigate("/home")}>HOME</button>
                            <button onClick={() => navigate("/buy")}>Buy Now</button>
                            <button>Whitepaper</button>
                            <button>Telegram</button>
                        </div>
                    </div>
                </div>
                <p className="bottom">
                    Copyright © 2022, DogeRush | All Rights Reserved.
                </p>
            </section>
        </>
    );
};

export default Main;
