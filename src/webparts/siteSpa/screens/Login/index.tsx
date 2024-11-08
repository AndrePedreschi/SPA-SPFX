import { ReactElement } from "react";

import { Container } from "./styles";
import { NavigationHeader } from "../../components/Header";
import { LoginForm } from "../../components/LoginForm";

export function Login(): ReactElement {
  return (
    <Container>
      <NavigationHeader />
      <LoginForm />
    </Container>
  );
}
