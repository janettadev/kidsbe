import React from "react";
import body from "../../img/Brain2 1.png";
import brain from "../../img/Brains 2.png";
import girl from "../../img/baby2 1.png";
import orig from "../../img/Orig 1.png";
import mom from "../../img/moms 1.png";
import climb from "../../img/climb 1.png";

const Study = () => {
	return (
		<div id="study">
			<div className="container">
				<div className="study">
					<h1>
						Занимайтесь с удовольствием и достигайте новых вершин
						следующие 2 месяца и всю жизнь{" "}
					</h1>
					<p>
						KidsBe — это комплексная программа, помогающая получить
						положительные результаты сразу в нескольких сферах
					</p>
					<div className="study--blocks">
						<div className="study--blocks__block">
							<img className="study--blocks__block--brainimg" src={brain} alt="" />
							<h3 className="study--blocks__block--brain">
								Равномерное развитие обоих полушарий мозга и
								межполушарных связей
							</h3>
						</div>
						<div className="study--blocks__block">
							<img className="study--blocks__block--bodyimg" src={body} alt="" />
							<h3 className="study--blocks__block--body">Укрепление памяти и внимания</h3>
						</div>
						<div className="study--blocks__block">
							<img className="study--blocks__block--girlimg" src={girl} alt="" />
							<h3 className="study--blocks__block--girl">Развитие мышления и познавательного интереса</h3>
						</div>
						<div className="study--blocks__block">
							<img className="study--blocks__block--origimg" src={orig} alt="" />
							<h3 className="study--blocks__block--orig">Раскрытие творческих способностей</h3>
						</div>
						<div className="study--blocks__block">
							<img className="study--blocks__block--momimg" src={mom} alt="" />
							<h3 className="study--blocks__block--mom">Налаживание эмоциональных связей с родителями</h3>
						</div>
						<div className="study--blocks__block">
							<img className="study--blocks__block--climbimg" src={climb} alt="" />
							<h3 className="study--blocks__block--climb">Повышение самостоятельности</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Study;
