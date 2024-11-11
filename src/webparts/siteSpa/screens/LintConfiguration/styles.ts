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
