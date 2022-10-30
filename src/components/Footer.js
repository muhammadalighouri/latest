import React from "react";
import "../scss/footer.scss";
import { AiFillYoutube } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="grid">
          <div className="logo">
            <Link to='/'>
              <img src="/images/logo/01-05.png" alt="" />
            </Link>

          </div>
          <p>
            <h6> www.dogerush.com</h6>
            <div>All rights Reserved</div>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
