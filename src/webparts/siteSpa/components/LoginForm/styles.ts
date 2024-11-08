import styled from "styled-components";

export const Form = styled.form`
	padding: 1.5rem;
	border: 1px solid black;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	min-width: 400px;
	-webkit-box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.75);
	box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.75);
`;

export const InputsSection = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	label {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;

		input {
			border: 1px solid #000000;
			height: 36px;
			border-radius: 18px;
			padding-left: 0.25rem;

			-webkit-box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.75);
			-moz-box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.75);
			box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.75);
		}
	}
`;
export const ActionSection = styled.section`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 0.5rem;

	button {
		padding: 0.5rem;
		border-radius: 24px;
		-webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
		box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
	}
`;

export const ErrorContainer = styled.div`
	height: 14px;

	p {
		font-weight: 700;
		color: #ff786f;
		font-size: 12px;
		font-style: italic;
	}
`;
