import Swal from "sweetalert2";

import { Container, Button } from "./styles";
import copy from "../../assets/copy.png";
type TTextWithCopy = {
  children: string;
};

export const TextWithCopy = ({ children }: TTextWithCopy) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const clipboard = () => {
    navigator.clipboard.writeText(children);
    Toast.fire({
      icon: "success",
      title: "Copiado!",
    });
  };
  return (
    <Container>
      <p>{children}</p>
      <Button onClick={clipboard} icon={copy} />
    </Container>
  );
};
