import styled, { keyframes, css } from "styled-components";

const spinLeft = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  `;

const spinRight = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
  `;

const morph = keyframes`
  50% {
    font-variation-settings: "MORF" 60;
  }
	`;

const typing = keyframes`
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
	`;

const blink = keyframes`
  50% {
    border-color: transparent;
  }
	`;

function checkImage(image: string) {
	switch (image) {
		case "left":
			return css`
				width: 36px;
				height: 36px;
				position: relative;
				left: 210px;
				top: 114px;
				border-radius: 50%;
				animation-name: ${spinLeft};
				animation-duration: 1300ms;
				animation-iteration-count: infinite;
				animation-timing-function: linear;
			`;
		case "right":
			return css`
				width: 36px;
				height: 36px;
				position: relative;
				left: 385px;
				top: 114px;
				border-radius: 50%;
				animation-name: ${spinRight};
				animation-duration: 1300ms;
				animation-iteration-count: infinite;
				animation-timing-function: linear;
			`;
	}
}

export const Img = styled.div<{ $url: string; $img: string }>`
	//quando tem 2 ou mais propriedades sendo mpassadas, elas são "filtradas" pelo stylede componentes por isso dever ter o simbolo de $ no inicio do nome deles, que é para serem reconhecidos e filtrados corretamente na sua utilização

	/* ${({ $url }) =>
		$url &&
		css`
			background-image: url(${$url});
		`} */

	background-image: url(${({ $url }) => $url});
	background-repeat: no-repeat;
	background-position: left;
	background-size: contain;
	width: 480px;
	height: 480px;

	${({ $img }) => checkImage($img)};
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	h1 {
		font-size: 46px;
	}

	.backgroundImg1 {
		background-image: url("https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg");
		//min-height: calc(100vh - 40px);
	}
	.backgroundImg2 {
		background-image: url("https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg");
		//min-height: 400px;
	}
	.backgroundImg3 {
		background-image: url("https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg");
		//min-height: 400px;
	}

	.backgroundImg1,
	.backgroundImg2,
	.backgroundImg3 {
		min-height: calc(100vh - 40px);
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
`;

export const WordSection = styled.div`
	position: absolute;
	width: fit-content;
	padding: 1rem;
	//left: calc(50% - 184px);
	left: calc(50% - 337px);
	//top: calc(50% - 28px);
	top: calc(50% - 39px);

	background-color: #ffffff;
	align-self: center;

	@font-face {
		font-family: "Kablammo";
		src:
			url("https://storage.googleapis.com/atoms-sandbox.google.com.a.appspot.com/Kablammo%5BMORF%5D.woff2")
				format("woff2"),
			url("https://storage.googleapis.com/atoms-sandbox.google.com.a.appspot.com/Kablammo%5BMORF%5D.ttf")
				format("truetype");
	}

	@layer demo {
		h1 {
			font-family: "Kablammo";
			font-variation-settings: "MORF" 0;
			animation: ${morph} 10s linear infinite;
			text-align: center;
			line-height: 1;
			font-size: 46;
		}
	}
`;

export const AnimationWordSection = styled.section`
	position: relative;
	background-color: #ffffff;
	align-self: center;
	justify-content: center;

	h1 {
		font-family: monospace;
		font-size: 1.5rem;
		margin-inline: auto;
		overflow: hidden;
		/* Keeps on a single line */
		white-space: nowrap;
		/* The cursor */
		border-right: 1px solid;
		/* steps = number of characters */
		animation:
			${typing} 9s steps(54) forwards,
			${blink} 1s step-end infinite;
	}
`;

export const ScrollDrivenAnimationSection = styled.section`
	position: relative;
	align-self: center;
	display: flex;
	justify-content: center;
	width: 100%;
	background-color: #ffffff;

	.titulo {
		font-family: sans-serif;
		text-align: center;
		font-size: 5rem;
		opacity: 0;
		transform: translateY(50px);
		transition:
			opacity 0.5s,
			transform 0.5s;
	}
`;

export const AnimationSpinSection = styled.section`
	position: relative;
	align-self: center;
	display: flex;
	justify-content: center;
	width: fit-content;
	background-color: #ffffff;
`;
