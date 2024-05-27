import React from "react";
import dialog from "../../img/dialog.png";
import dialog2 from "../../img/keddd 2.png";

const Section6 = () => {
  return (
    <div id="section6">
      <div className="container">
        <div className="section6">
          <img src={dialog} alt="" className="dialog" />
          <img src={dialog2} alt="" className="dialog2" />
          <div className="section6--text">
            <h2>
              Пошаговые инструкции <br />и обратная связь от экспертов
            </h2>
            <p>
              В обучающую методику интегрирована онлайн-школа KidsBe. <br />С
              первого дня вы получите доступ к пошаговым инструкциям <br /> по
              домашнему обучению в целом и отдельным занятиям <br />в частности.
              Полезные советы и видеоинструкции <br />
              упростят обучение ребенка. <br />
              <br /> <br /> В онлайн-школе вы будете получать от педагогов
              обратную <br />
              связь по прогрессу, проверку домашних заданий <br /> и
              персональные рекомендации.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
