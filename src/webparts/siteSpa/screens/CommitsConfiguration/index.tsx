import { ReactElement } from "react";

import { Container, Img } from "./styles";
import working from "../../assets/under.png";

export function CommitsConfiguration(): ReactElement {
  return (
    <Container>
      <Img url={working} />
      <h1>Volte mais tarde...</h1>

      <p>https://typicode.github.io/husky/get-started.html</p>
      <p></p>
    </Container>
  );
}
