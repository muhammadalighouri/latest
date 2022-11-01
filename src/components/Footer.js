import React from "react";
import "../scss/footer.scss";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaRedditAlien } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Instagram, Telegram, YouTube } from "@material-ui/icons";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="grid">
          <div className="nav__btns">
            <a
              href="https://discord.gg/3DUsna54
"
              target="_blank"
            >
              <YouTube />
            </a>
            <a href="https://twitter.com/blkstarlabz " target="_blank">
              <Instagram />
            </a>
            <a
              href="https://www.instagram.com/blkstarlabz/"
              target="_blank"
            >
              <Telegram />
            </a>
            <a
              href="https://www.instagram.com/blkstarlabz/"
              target="_blank"
            >
              <FaTiktok />
            </a>

          </div>
          <p>Copyright © 2022, DogeRush | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
