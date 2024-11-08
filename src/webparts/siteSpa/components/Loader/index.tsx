import { ReactElement } from "react";

import { SpinnerContainer, LoadingMsg, Spinner } from "./styles";

export const Loader = (): ReactElement => {
  return (
    <SpinnerContainer>
      <Spinner></Spinner>
      <LoadingMsg>Loading...</LoadingMsg>
    </SpinnerContainer>
  );
};
