import styled, { css } from "styled-components";
import { fadeIn } from "../Style";

const BgTagStyle = css`
  font-family: "Tangerine", cursive;
  font-size: 24px;
  color: #535353;
  animation: ${fadeIn} 2s;
`;

export const BgTag = styled.p`
  ${BgTagStyle}
  margin-top : ${({ mt }) => `${mt}px`};
  margin-left: ${({ ml }) => `${ml}px`};
`;

export const BgTag2 = styled.span`
  ${BgTagStyle}
`;
