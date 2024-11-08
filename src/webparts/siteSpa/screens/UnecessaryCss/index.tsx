import { ReactElement, useCallback, useEffect } from "react";

import {
	Container,
	Img,
	AnimationSpinSection,
	WordSection,
	AnimationWordSection,
	ScrollDrivenAnimationSection,
} from "./style";
import dog from "../../assets/dog.png";
import espiral from "../../assets/espiral.jpg";

export function UnecessaryCss(): ReactElement {
	const titulo: any = document.querySelector(".titulo");
	const handleScroll = useCallback(() => {
		if (!titulo) return;
		const scrollTop = window.scrollY;
		const tituloTop = titulo.offsetTop;
		const windowHeight = window.innerHeight;

		if (scrollTop >= tituloTop - windowHeight) {
			titulo.style.opacity = 1;
			titulo.style.transform = "translateY(0)";
		}
	}, [titulo]);

	useEffect(() => {
		console.log("Iniciou");

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [handleScroll, titulo]);

	return (
		<Container>
			<div className="backgroundImg1">
				<WordSection>
					<h1>
						Unnecessary <span>css</span> animations
					</h1>
				</WordSection>
			</div>

			<AnimationWordSection>
				<h1>Texto atraente que o cliente me contratou para escrever</h1>
			</AnimationWordSection>

			<div className="backgroundImg2" />

			<ScrollDrivenAnimationSection>
				<h1 className="titulo">Texto exemplo de animação por scroll</h1>
			</ScrollDrivenAnimationSection>

			<div className="backgroundImg3" />
			<AnimationSpinSection>
				<Img $url={espiral} $img="left" />
				<Img $url={espiral} $img="right" />
				<Img $url={dog} />
			</AnimationSpinSection>
		</Container>
	);
}
