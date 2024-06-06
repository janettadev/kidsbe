import React from "react";
import teacher from "../../img/teacher.png";

const Section9 = () => {
  return (
    <div id="disclose">
      <div className="container">
        <div className="disclose">
          <img src={teacher} alt="" />
          <div className="disclose--div">
            <h3>Раскройте педагогический потенциал </h3>
            <p>
              KidsBe развивается и создает инновационные обучающие программы для
              детей, поэтому мы открыты для сотрудничества с новыми авторами.{" "}
              <br />
              <br />
              <span>
                Если вы активный родитель, специалист в этой области или просто
                располагаете хорошей идеей, обратитесь к нам.
              </span>{" "}
              Вместе мы сделаем дошкольное образование еще интереснее —
              приходите сами и приводите друзей.
            </p>
            <button>Стать автором</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section9;
