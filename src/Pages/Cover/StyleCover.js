import styled, { css } from "styled-components";
import chatBg from "../../images/chatbg5.jpeg";
import { fadeIn, flicker, shine, darkGray, mobile } from "../../Style";

export const CoverWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  ${mobile} {
    grid-template-columns: 1fr;
  }
  min-height: 100vh;
`;

export const CoverFirstCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${darkGray};
  padding-left: 50px;
  ${mobile} {
    min-height: 100vh;
  }
`;

export const CoverSecondCol = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${chatBg}) no-repeat center center;
  background-size: cover;
  ${mobile} {
    min-height: 90vh;
    padding: 5px;
  }
`;

export const CoverTitle = styled.div`
  font-weight: 700;
  line-height: 50px;
  font-size: 28px;
  margin-top: -50px;
  width: 90%;
  color: #fff;
  animation: ${fadeIn} 2s;
`;

export const CoverName = styled.span`
  text-shadow: 0 0 0.3rem #ffe6ff, 0 0 0.3rem #ff65bd,
    -0.2rem 0.15rem 1rem #ff65bd, 0.1rem 0.1rem 0.5rem #ff65bd,
    0 -0.5rem 1rem #ff2483, 0 0.5rem 1rem #ff2483;
  animation: ${shine} 4s forwards, ${flicker} 6s infinite;
`;

export const MessageShared = css`
  font-weight: 400;
  padding: 9px 14px;
  transition: all 0.2s ease-in;
  animation: ${fadeIn} 0.4s;
`;

export const AiMessage = styled.div`
  ${MessageShared}
  color: #000000;
  background-color: #ffffff;
  margin: 20px 0 0 10px;
  border-radius: 14px 14px 14px 0;
  align-self: flex-start;
  &:first-child {
    margin-top: 30px;
    animation: ${fadeIn} 2s;
  }
`;

export const MyMessage = styled.div`
  ${MessageShared}
  color: #ffffff;
  background-color: #000000;
  margin: 20px 10px 0 0;
  border-radius: 14px 14px 0px 14px;
  align-self: flex-end;
`;

export const MessageWrapper = styled.form`
  display: flex;
  position: relative;
  align-items: center;
  width: 95%;
  align-self: center;
  min-height: 50px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #ffffff;
  margin-top: 5px;
  padding-left: 5px;
`;

export const MessageBox = styled.input`
  font-family: Titillium Web, Poppins, Roboto, Arial, Helvetica, sans-serif;
  border: none;
  width: 90%;
`;

export const PromptWrapper = styled.div`
  margin-top: auto;
  align-self: flex-start;
  margin-left: 10px;
  min-width: 200px;
  padding-left: 10px;
`;

export const SendButton = styled.img`
  width: 25px;
  &:hover {
    cursor: pointer;
    opacity: 0.3;
  }
`;

export const ContactMe = styled.button`
  animation: ${fadeIn} 2s;
  margin-top: 50px;
  color: #e5aeb9;
  width: 150px;
  height: 50px;
  background: none;
  text-transform: uppercase;
  font-weight: bold;
  border: 3px solid #e5aeb9;
  font-family: Dancing Script, Poppins, sans-serif;
  &:hover {
    cursor: pointer;
    transition: 0.2s ease-in-out;
    /* opacity: 0.8; */
    color: #282828;
    background: #e5aeb9;
  }
`;
