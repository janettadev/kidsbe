import React from "react";
import girl from "../../img/girl .png";
import bg from "../../img/bg1.png";

const Kids = () => {
  return (
    <div id="kids">
      <div className="container">
        <div className="kids">
          <div className="kids--div">
            <h1>
              <span>Откройте мир</span> знаний своему ребенку
            </h1>
            <h4>Пусть старт в образовании пройдет без стресса и скуки</h4>
            <div className="kids--div__contact">
              <div className="contact1">
                <h3>Ваше имя</h3>
                <button>write</button>
              </div>
              <div className="contact1">
                <h3>Ваш телефон</h3>
                <button>+7</button>
              </div>
            </div>
            <div className="kids--div__contact--btn">
              <p>
                Нажимая на кнопку, Вы даёте согласие <br />
                на обработку персональных данных
              </p>
              <button>Узнать стоимость</button>
            </div>
          </div>
          <img src={girl} alt="" className="kids__girl" />
          <div className="kids--div__bg">
            <img src={bg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kids;
