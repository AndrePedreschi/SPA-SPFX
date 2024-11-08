import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  h1 {
    font-size: 32px;
  }
`;

export const Img = styled.div<{ url: string }>`
  background-image: url("./ufo.gif");
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 480px;
  height: 480px;
`;
