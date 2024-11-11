import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem 3rem;

  h1 {
    font-size: 24px;
  }
`;
export const Section = styled.section`
  width: 100%;
  p:first-of-type {
    padding-top: 0.5rem;
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
