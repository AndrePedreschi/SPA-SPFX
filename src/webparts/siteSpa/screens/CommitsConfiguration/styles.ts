import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Img = styled.div<{ url: string }>`
	background-image: url("./ufo.gif");
	background-image: url(${({ url }) => url});
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	width: 480px;
	height: 480px;
`;
