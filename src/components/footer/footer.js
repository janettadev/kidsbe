import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--div">
            <h2>ИП Максименко Павел Викторович</h2>
            <h2>ИНН 860702788054 </h2>
            <h2>ОГРНИП 311860718500013</h2>
          </div>
          <div className="footer--div__icon">
            <p>
              <FaInstagram />
            </p>
            <p>
              <FaYoutube />
            </p>
            <p>
              <FaFacebook />
            </p>
            <p>
              <FaLinkedin />
            </p>
            <p>
              <IoLogoWhatsapp />
            </p>
            <p>
              <FaTelegram />
            </p>
            <p>
              <TbPhoneCall />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
