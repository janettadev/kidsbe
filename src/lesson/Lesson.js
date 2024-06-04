import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import kids2 from "../img/kids2.png"
import group31 from "../img/Group 31.png"

const Lesson = () => {
	return (
		<div id="lesson">
			<div className="container">
				<div className="lesson">
					<div className="lesson--info">
						<h1>33 занятия — и ваш ребенок на <span>новом уровне</span> знаний </h1>
						<p>Учитесь без скуки и стресса с KidsBe</p>
						<div className="lesson--info__inputs">
							<div className="lesson--info__inputs--input1">
								<h2>Ваше имя</h2>
								<input type="text" placeholder="Александр" />
							</div>
							<div className="lesson--info__inputs--input2">
								<h2>Ваш телефон</h2>
								<input type="number" placeholder="+7" />
							</div>
						</div>
						<div className="lesson--info__btn">
							<div className="lesson--info__btn--text">
                        <span><IoMdCheckmark /></span>
                     <h3>
								Нажимая на кнопку, Вы даёте согласие на обработку
								персональных данных
							</h3>
                     </div>
                     <button>Узнать стоимость</button>
						</div>
					</div>
               <div className="lesson--image">
                  <img className="lesson--image__img1" src={kids2} alt="" />
                  <img className="lesson--image__img2" src={group31} alt="" />
               </div>
				</div>
			</div>
		</div>
	);
};

export default Lesson;
