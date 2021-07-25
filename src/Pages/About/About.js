import React from "react";
import {
  AboutMeDescription,
  AboutMeFirstCol,
  AboutMeSecondCol,
  AboutMeTitle,
  AboutMeWrapper,
  Tiler,
  Tiles,
  Logo,
} from "./StyleAbout";
import PythonLogo from "../../images/pythonlogo.png";
import ReactLogo from "../../images/reactlogo.png";
import TSLogo from "../../images/typescriptlogo.png";
import NodeLogo from "../../images/nodelogo.png";
import CppLogo from "../../images/cpplogo.png";
import GitLogo from "../../images/gitlogo.png";
import { BgTag, BgTag2 } from "../../shared/Tag";

const About = () => {
  return (
    <AboutMeWrapper>
      <AboutMeFirstCol id="about">
        <AboutMeTitle data-aos="fade-in">
          <BgTag ml={-15}>{"<section>"}</BgTag>
          <BgTag>{"<h2>"}</BgTag>About Me<BgTag2>{"</h2>"}</BgTag2>
        </AboutMeTitle>
        <AboutMeDescription data-aos="fade-in">
          Third year computer science major at UCLA who doesn't like staring at
          computers and reading science papers <br />
          <br />
          Crazy fan of both classical and K-Pop music (sure they could go
          together)
          <br />
          <br />
          Passionate learner of philosophy and psychology ending up in CS for
          money but accidentally love it
          <BgTag mt={15}>{"</section>"}</BgTag>
        </AboutMeDescription>
      </AboutMeFirstCol>

      <AboutMeSecondCol data-aos="zoom-in-right">
        <Tiles>
          <Tiler>
            <Logo src={PythonLogo} alt="pythoon"></Logo>Python
          </Tiler>
          <Tiler>
            <Logo src={ReactLogo} alt="react"></Logo>React
          </Tiler>
          <Tiler>
            <Logo src={TSLogo} alt="js"></Logo>TypeScript
          </Tiler>
          <Tiler>
            <Logo src={NodeLogo} alt="node"></Logo>Node.js
          </Tiler>
          <Tiler>
            <Logo src={GitLogo} alt="git"></Logo>Git
          </Tiler>
          <Tiler>
            <Logo src={CppLogo} alt="c++"></Logo>C++
          </Tiler>
        </Tiles>
      </AboutMeSecondCol>
    </AboutMeWrapper>
  );
};

export default About;
