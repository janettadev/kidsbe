import React from "react";
import kidsbe from "../../img/kidsbe.png";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoCall } from "react-icons/io5";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header--img">
            <img src={kidsbe} alt="" />
            <p>
              продуктивный подход <br />к обучению детей
            </p>
          </div>
          <div className="header--img__icon">
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
              <FaVk />
            </p>
            <p className="whatsapp">
              <FaWhatsapp />
            </p>
            <p className="telegram">
              <FaTelegram />
            </p>
            <p className="call">
              <FiPhoneCall />
            </p>
          </div>
          <div className="header--img__icon--text">
            <h3>+ 7 212 342 39 49</h3>
            <button>
              <IoCall /> <span>Заказать звонок</span>
            </button>
          </div>
          <div className="header--phone">
            <div className="background"></div>
            <div className="line">
              <div className="liner"></div>
              <div className="liner2"></div>
              <div className="liner3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
