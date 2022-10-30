import React from "react";
import "../scss/footer.scss";
import { AiFillYoutube } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="grid">
          <div className="logo">
            <a href="">
              <img src="/images/logo/01-05.png" alt="" />
            </a>
          </div>
          <p>
            <h6> WWW.DogeRush.IO</h6>
            <div>All rights Reserved</div>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
