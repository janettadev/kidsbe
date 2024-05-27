import React from "react";
import block1 from "../../img/block1.png";
import block2 from "../../img/block2.png";
import block3 from "../../img/block3.png";
import block4 from "../../img/block4.png";
const Section5 = () => {
  return (
    <div id="section5">
      <div className="container">
        <div className="section5">
          <h1>
            Полный арсенал развивающих инструментов <br /> в вашем смартфоне
          </h1>
          <p>
            Часть заданий и полезной информации для родителей доступна <br /> в
            мобильном приложении. Оно включает:
          </p>
          <div className="section5--blocks">
            <div className="section5--blocks__block1">
              <img src={block1} alt="" />
              <p>
                Карты развития ФГОС — <br /> перечни умений и навыков <br />{" "}
                детей в разном возрасте <br />и бланки для личных заметок —
                <br />
                просто введите возраст <br />
                ребенка, и приложение <br />
                покажет, что он уже <br />
                должен уметь.{" "}
              </p>
            </div>
            <div className="section5--blocks__block1">
              <img src={block2} alt="" />
              <p>
                Мультфильмы и мини-игры с элементами дополненной реальности для
                вовлечения в образовательный процесс.{" "}
              </p>
            </div>
            <div className="section5--blocks__block1">
              <img src={block3} alt="" />
              <p>
                Видеоуроки с подробными инструкциями по выполнению физических и
                логопедических упражнений.{" "}
              </p>
            </div>
            <div className="section5--blocks__block1">
              <img src={block4} alt="" />
              <p>
                Чат со специалистами для оперативной поддержки и личных
                консультаций
              </p>
            </div>
          </div>
          <h2>
            Приложение удобно и интуитивно понятно. <br />
            Все получится, даже если вы впервые пробуете такой формат обучения.
          </h2>
          <button>Получить демо-доступ</button>
        </div>
      </div>
    </div>
  );
};

export default Section5;
