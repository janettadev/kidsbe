import React from "react";
import lion from "../../img/lion.png";

const Section7 = () => {
  return (
    <div id="section7">
      <div className="container">
        <div className="section7">
          <div className="section7--text">
            <h2>Исследуйте мир в дополненной реальности </h2>
            <p>
              С помощью фигурок героев и моделей KidsBe ребенок <br />
              запомнит животных, углубит знания о природе и планете, <br />а
              также разовьет мелкую моторику рук. <br /> <br /> <br />
              Яркие впечатления малышу подарят игры с элементами <br />
              дополненной реальности: интересные персонажи <br />и звери оживут
              на экране телефона. Ассоциативные мультфильмы помогут детям
              вовлечься в образовательный процесс и научиться мыслить по-новому.
            </p>
          </div>
          <img src={lion} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section7;
