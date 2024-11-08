import styled from "styled-components";

export const Container = styled.div`
	margin-top: 0.5rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;

	p {
		padding-top: 0 !important;
	}
`;

export const Button = styled.button<{ icon: string }>`
	padding: 12px;
	border: 1px solid #000000;
	border-radius: 4px;
	background-image: url(${({ icon }) => icon});
	background-size: 16px 16px;
	background-position: center;
	background-repeat: no-repeat;
	cursor: pointer;
`;
