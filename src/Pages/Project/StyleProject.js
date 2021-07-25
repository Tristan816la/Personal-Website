import styled from "styled-components";
import { darkGray, pink, mobile } from "../../Style";

export const ProjectWrapper = styled.div`
  min-height: 100vh;
  background: ${darkGray};
  display: flex;
  flex-direction: column;
  ${mobile} {
    padding-top: 50px;
    padding-left: 25px;
  }
`;

export const ProjectTitle = styled.h1`
  display: none;
  ${mobile} {
    display: block;
    color: ${pink};
    font-size: 35px;
    margin-top: 30px;
    transform: rotate(-8deg) skew(-10deg);
    margin-bottom: 30px;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  ${mobile} {
    grid-template-columns: 1fr 1fr;
    place-items: center;
    width: 100%;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.8s ease-in-out;
  transform-style: preserve-3d;
  position: relative;
  box-shadow: 1px 1px white;

  & div {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 5px;
  }
`;

export const CardContainer = styled.div`
  height: 250px;
  ${mobile} {
    height: 220px;
    font-size: 10px;
    width: 48vw;
  }

  &:hover ${Card} {
    transform: rotateY(180deg);
  }
  & a {
    color: inherit;
    font-weight: bold;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const CardFront = styled.div`
  backface-visibility: hidden;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    filter: brightness(80%);
  }
`;

export const CardBack = styled.div`
  background: ${pink};
  transform: rotateY(180deg);
  padding: 0 20px;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 10px;
`;

export const Techstack = styled.p`
  font-style: italic;
`;
