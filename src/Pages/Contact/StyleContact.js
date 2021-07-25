import styled from "styled-components";
import { darkGray, mobile, pink } from "../../Style";

export const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  background-color: ${darkGray};
  ${mobile} {
    grid-template-columns: 1fr;
  }
`;

export const ContactFirstCol = styled.div`
  display: flex;
  align-items: center;
  padding: 50px;
  position: relative;
`;

export const Resume = styled.img`
  width: 90%;
  filter: brightness(90%);
  border-radius: 5px;
  &:hover {
    transition: all 0.2s ease-in-out;
    filter: brightness(80%);
    cursor: pointer;
  }
`;

export const Download = styled.img`
  width: 15%;
  transition: all 0.2s ease-in-out;
  position: absolute;
  opacity: 0.7;
  z-index: 100;
  left: 35%;
  top: 35%;
`;

export const ContactSecondCol = styled.div`
  gap: 20px;
  min-height: 100vh;
  color: ${pink};
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mobile} {
    padding: 20px;
    justify-content: center;
    align-items: center;
  }
  & h1 {
    margin-top: -150px;
    font-size: 40px;
    ${mobile} {
      margin-top: -400px;
      font-size: 32px;
    }
  }
  & a {
    color: inherit;
  }
`;

export const LinkWrapper = styled.div`
  color: #fafafa;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  & a {
    text-decoration: none;
  }
  & a:hover {
    text-decoration: underline;
    opacity: 0.9;
  }
  ${mobile} {
    margin-left: 20px;
  }
`;

export const ResumeText = styled.h1`
  display: none;
  ${mobile} {
    text-decoration: none;
    display: block;
    margin-bottom: 50px;
    color: ${pink};
  }
`;
