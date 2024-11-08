import styled from "styled-components";

import img2 from "./logo2.png";

export const Header = styled.header`
  height: 36px;
  width: 100%;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fee2deb3;
  border-bottom: 1px solid black;
`;

export const ImgSection = styled.section`
  .img {
    background-image: url(${img2});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 100px;
    height: 24px;
  }
`;

export const NavigationSection = styled.section`
  display: flex;
  gap: 0.5rem;

  .btn {
    padding: 2px 4px;
    background-color: #ffffff;
    border: 1px solid #df9a46d8;
    border-radius: 4px;
    -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
    text-decoration: none;
    color: #000000;
    font-weight: 700;
  }
`;
