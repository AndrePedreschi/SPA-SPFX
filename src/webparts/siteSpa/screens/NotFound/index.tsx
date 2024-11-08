import { ReactElement } from "react";

import { Container, Img } from "./styles";
import ufo from "../../assets/ufo.gif";

export function NotFound(): ReactElement {
  return (
    <Container>
      <Img url={ufo} />
      <h1>Página não encontrada!</h1>
    </Container>
  );
}
