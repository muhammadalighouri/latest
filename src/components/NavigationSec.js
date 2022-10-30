import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaRedditAlien } from "react-icons/fa";
import { links } from "../assests/data";
import { FaInstagram } from "react-icons/fa";
import { DiscFullRounded, Instagram, Twitter } from "@material-ui/icons";
import { nav } from "../assests/data"
import "../scss/navsec.scss"
const NavigationSec = () => {
    const [navToggler, setNavToggler] = useState(false);
    function barBtn() {
        setNavToggler(!navToggler);
    }
    const navigate = useNavigate();
    return (
        <div className="header">
            <div className="container">
                <div className="icon">
                    <div onClick={() => barBtn()}>
                        <span
                            style={{
                                transform: navToggler
                                    ? "translateY(15px) rotate(45deg)"
                                    : "unset",
                            }}
                        ></span>
                        <span
                            style={{
                                display: navToggler ? "none " : "unset",
                            }}
                        ></span>
                        <span
                            style={{
                                transform: navToggler
                                    ? "translateY(-6px) rotate(-45deg) "
                                    : "unset",
                            }}
                        ></span>
                    </div>
                </div>
                <h2><img src="/images/logo/01-03.png" alt="" /></h2>
                <div className={`nav__top ${navToggler ? "nav___active" : null}`}>
                    <div className="div">
                        <ul>
                            {nav.map((item, i) => {
                                return <li>{item.name}</li>;
                            })}
                        </ul>
                        <div className="icons">
                            <a href="" target={"_blank"}>
                                <Twitter />
                            </a>
                            <a href="" target={"_blank"}>
                                <Instagram />
                            </a>
                            <a href="" target={"_blank"}>
                                <FaDiscord />
                            </a>
                        </div>
                    </div>
                </div>

                <button>JOIN NOW!</button>
            </div>
        </div>
    )
}

export default NavigationSec