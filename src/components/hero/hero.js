import React from "react";
import { Link } from "react-router-dom";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { TfiHome } from "react-icons/tfi";
import { SlMagicWand } from "react-icons/sl";
import { BsCalendar2Date } from "react-icons/bs";
import { PiBookOpenTextThin } from "react-icons/pi";
import twokids from "../../img/kids 3.png";
import heroImg from "../../img/heroImg.png";
const Hero = () => {
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero--text">
            <Link to={"/"}>Что входит в обучение</Link>
            <Link to={"/"}>Инструменты</Link>
            <Link to={"/"}>Помощь экспертов </Link>
            <Link to={"/"}>Стать автором </Link>
            <Link to={"/"}>Преимущества</Link>
            <Link to={"/"}>Отзывы</Link>
          </div>
          <div className="hero--text__kids">
            <div className="productivity">
              <h1>
                KidsBe - продуктивный <br /> подход к обучению детей <br /> от 3
                до 7 лет{" "}
              </h1>
              <p>
                Книга + мобильное приложение + онлайн-школа <br />
                работают как единая система для развития речи,
                <br /> ума и навыков общения
              </p>
            </div>
            <div className="heroImg">
              <img src={twokids} alt="" className="twoKids" />
              <img src={heroImg} alt="" />
              <div className="btnInput">
                <div className="btnInput--ion">
                  <p>
                    <IoPhonePortraitOutline />
                  </p>
                  <input type="" placeholder="     +7" />
                </div>
                <button>Получить демо-доступ</button>
              </div>
            </div>
          </div>
          <div className="hero--text__kids--icon">
            <div className="iconBg">
              <h2>
                <TfiHome />
              </h2>
              <h4>
                Домашняя альтернатива <br /> детским центрам
              </h4>
            </div>
            <div className="iconBg2">
              <h2>
                <SlMagicWand />
              </h2>
              <h4>Простое применение</h4>
            </div>
            <div className="iconBg3">
              <h2>
                <BsCalendar2Date />
              </h2>
              <h4>33 занятия за 2 месяца</h4>
            </div>
            <div className="iconBg4">
              <h2>
                <PiBookOpenTextThin />
              </h2>
              <h4>Результат с первого урока</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
