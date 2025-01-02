import { ReactElement } from "react";

import { Container } from "./styles";
import { LoginForm } from "../../components/LoginForm";

export function Login(): ReactElement {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
}
