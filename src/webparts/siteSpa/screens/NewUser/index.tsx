import { ReactElement } from "react";

import { Container } from "./styles";
import { NavigationHeader } from "../../components/Header";
import { NewUserForm } from "../../components/NewUserForm";

export function NewUser(): ReactElement {
  return (
    <Container>
      <NavigationHeader />
      <NewUserForm />
    </Container>
  );
}
