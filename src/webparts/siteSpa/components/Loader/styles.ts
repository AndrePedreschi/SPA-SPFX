import styled, { keyframes } from "styled-components";

export const SpinnerContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

const slSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  `;

export const Spinner = styled.div`
	display: inline-block;
	width: 28px;
	height: 28px;
	border: 1.5px solid rgb(199, 224, 244);
	border-top-color: rgb(0, 120, 212);
	border-radius: 50%;
	animation-name: ${slSpin};
	animation-duration: 1300ms;
	animation-iteration-count: infinite;
	animation-timing-function: linear;

	/* @keyframes slSpin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	} */
`;

export const LoadingMsg = styled.div`
	color: rgb(0, 120, 212);
`;
