import { ReactElement } from "react";

import { Container } from "./styles";
import { NewUserForm } from "../../components/NewUserForm";

export function NewUser(): ReactElement {
  return (
    <Container>
      <NewUserForm />
    </Container>
  );
}
