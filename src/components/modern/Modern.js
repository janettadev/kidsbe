import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import kids2 from "../../img/kids2 1.png";
import group31 from "../../img/Group 31 (1).png";

const Modern = () => {
	return (
		<div id="modern">
			<div className="container">
				<div className="modern">
					<div className="modern--info">
						<h1>
							<span>Современный</span> подход к дошкольному образованию{" "}
						</h1>
						<p>Покажите ребенку, что учиться — это весело</p>
						<div className="modern--info__inputs">
							<div className="modern--info__inputs--input1">
								<h2>Ваше имя</h2>
								<input type="text" placeholder="Александр" />
							</div>
							<div className="modern--info__inputs--input2">
								<h2>Ваш телефон</h2>
								<input type="number" placeholder="+7" />
							</div>
						</div>
						<div className="modern--info__btn">
							<div className="modern--info__btn--text">
								<span>
									<IoMdCheckmark />
								</span>
								<h3>
									Нажимая на кнопку, Вы даёте согласие на обработку
									персональных данных
								</h3>
							</div>
							<button>Узнать стоимость</button>
						</div>
					</div>
					<div className="modern--image">
						<img className="modern--image__img1" src={kids2} alt="" />
						<img className="modern--image__img2" src={group31} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modern;
