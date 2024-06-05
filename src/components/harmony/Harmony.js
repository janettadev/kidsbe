import React from "react";
import book from "../../img/Vector (1).png";
import desc from "../../img/Vector.png";
import kids from "../../img/kids2 2.png";

const Harmony = () => {
	return (
		<div id="harmony">
			<div className="container">
				<div className="harmony">
					<h1>
						Гармония традиционных методик и новейших возможностей
						педагогики{" "}
					</h1>
					<h3>
						Практическое пособие KidsBe совмещает офлайн и онлайн-занятия.
						Ребенок привыкает учиться в нескольких форматах:
					</h3>
					<div className="harmony--info">
						<div className="harmony--info__text">
							<div className="harmony--info__text--boxes">
								<div className="harmony--info__text--boxes__box">
									<img src={book} alt="" />
									<p>
										Читать и писать с помощью красивых книг, прописей,
										карточек
									</p>
								</div>
								<div className="harmony--info__text--boxes__box">
									<img src={desc} alt="" />
									<p>
										Слушать, запоминать и играть в мобильном
										приложении{" "}
									</p>
								</div>
							</div>
							<h4>
								Разные варианты работы поддерживают интерес ребенка к
								занятиям и взаимно усиливают друг друга, что помогает
								учиться без скуки и развиваться гармонично.{" "}
							</h4>
						</div>
						<img className="harmony--info__image" src={kids} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Harmony;
