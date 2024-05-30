import React from "react";
import book from "../../img/mats 1.png"
const Open = () => {
	return (
		<div id="open">
			<div className="conatainer">
				<div className="open">
					<h1>
						Откройте ребенку радость увлекательного развития без скуки и
						стресса{" "}
					</h1>
					<div className="open--info">
						<div className="open--info__img">
							<img src={book} alt="" />
							<div className="open--info__img--rectangle1"></div>
							<div className="open--info__img--rectangle2"></div>
							<div className="open--info__img--text1">
								<p>
									Комплект включает печатные материалы, мобильное
									приложение и доступ к онлайн- школе — занятия
									проходят сразу в нескольких форматах
								</p>
							</div>
							<div className="open--info__img--text2">
								<p>
									Программа состоит из 33 уроков и рассчитана в среднем
									на 2 месяца, однако скорость прохождения у разных
									детей отличается
								</p>
							</div>
						</div>
						<div className="open--info__content">
							<h2>
								Практическое пособие KidsBe создано для домашнего
								обучения детей чтению, письму, мышлению и другим навыкам
							</h2>
							<div className="open--info__content--blocks">
								<div className="open--info__content--blocks__block1">
									<p>
										Методика разработана специалистами по детскому
										развитию, поэтому эффективна и безопасна
									</p>
								</div>
								<div className="open--info__content--blocks__block2">
									<p>
										Задания продуманы таким образом, чтобы принести
										ребенку максимум пользы и удовольствия
									</p>
								</div>
							</div>
							<h3>
								Вы получите материалы с подробными инструкциями — просто
								следуйте рекомендациям, и все пройдет отлично
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Open;
