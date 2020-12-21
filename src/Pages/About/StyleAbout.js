import styled from "styled-components";
import { darkGray, fadeIn, mobile, pink } from "../../Style";

export const AboutMeWrapper = styled.div`
  background: ${darkGray};
  min-height: 100vh;
  grid-template-columns: 2fr 3fr;
  display: grid;
  ${mobile} {
    padding-top: 100px;
    grid-template-columns: 1fr;
  }
`;

export const AboutMeFirstCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
  animation: ${fadeIn} 2s;
  ${mobile} {
    padding-left: 25px;
  }
`;

export const AboutMeDescription = styled.div`
  color: #ffffff;
  margin-top: 30px;
`;

export const AboutMeSecondCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutMeTitle = styled.h1`
  color: ${pink};
  font-size: 40px;
  margin-top: -90px;
`;

export const Tiles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${mobile} {
    grid-template-columns: repeat(2, 1fr);
    margin-top: -100px;
    place-items: center;
    row-gap: 20px;
    width: 100%;
  }
  height: 45%;
  width: 80%;
`;

export const Tiler = styled.div`
  display: flex;
  width: 200px;
  height: 80px;
  background-color: ${pink};
  color: ${darkGray};
  font-size: 20px;
  transform: rotate(-30deg) skew(25deg);
  box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  gap: 10px;
  ${mobile} {
    width: 100px;
    height: 40px;
    font-size: 11px;
  }
  &:hover {
    transition: all 0.5s;
    opacity: 0.9;
    background-color: #fefce8;
    box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.5);
    transform: rotate(-30deg) skew(25deg) translate(20px, -20px);
  }
  &:hover::before {
    opacity: 0.9;
    background-color: #fefce8;
  }
  &:hover::after {
    opacity: 0.9;
    background-color: #fefce8;
  }

  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 100%;
    top: 10px;
    left: -20px;
    transform: skewY(-45deg);
    background: ${pink};
    opacity: 0.9;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 20px;
    bottom: -20px;
    left: -10px;
    transform: rotate(0deg) skewX(-45deg);
    background: ${pink};
    opacity: 0.9;
  }
`;

export const Logo = styled.img`
  width: 28px;
`;
