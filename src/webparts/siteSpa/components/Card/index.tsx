//import { Link } from "react-router-dom";
import { ReactElement } from "react";

import { Container } from "./styles";

type TCardProps = {
	children: React.ReactNode;
};
export const Card = ({ children }: TCardProps): ReactElement => {
	return <Container>{children}</Container>;
};
