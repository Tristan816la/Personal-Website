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
import JSLogo from "../../images/javascriptlogo.png";
import NodeLogo from "../../images/nodelogo.png";
import CppLogo from "../../images/cpplogo.png";
import GitLogo from "../../images/gitlogo.png";

const About = () => {
  return (
    <AboutMeWrapper>
      <AboutMeFirstCol id="about">
        <AboutMeTitle data-aos="fade-in">About Me</AboutMeTitle>
        <AboutMeDescription data-aos="fade-in">
          Second year computer science major at UCLA who doesn't like staring at
          computers and reading science papers <br />
          <br />
          Crazy fan of both classical and K-Pop music (Favorite artists: Liszt &
          Blankpink)
          <br />
          <br />
          Passionate learner of philosophy and psychology ending up in CS for
          money but accidentally enjoy it
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
            <Logo src={JSLogo} alt="js"></Logo>JavaScript
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

        {/* <Progress>
          <ProgressText>Python</ProgressText>
          <ProgressBar>
            <ProgressDone data-aos="zoom-in-right" done="90%"></ProgressDone>
          </ProgressBar>
        </Progress>
        <Progress>
          <ProgressText>JavaScript</ProgressText>
          <ProgressBar>
            <ProgressDone data-aos="zoom-in-right" done="85%"></ProgressDone>
          </ProgressBar>
        </Progress>
        <Progress>
          <ProgressText>React</ProgressText>
          <ProgressBar>
            <ProgressDone data-aos="zoom-in-right" done="80%"></ProgressDone>
          </ProgressBar>
        </Progress>
        <Progress>
          <ProgressText>Git</ProgressText>
          <ProgressBar>
            <ProgressDone data-aos="zoom-in-right" done="75%"></ProgressDone>
          </ProgressBar>
        </Progress>
        <Progress>
          <ProgressText>Node.js</ProgressText>
          <ProgressBar>
            <ProgressDone data-aos="zoom-in-right" done="70%"></ProgressDone>
          </ProgressBar>
        </Progress>
        <Progress>
          <ProgressText>C++</ProgressText>
          <ProgressBar>
            <ProgressDone data-aos="zoom-in-right" done="65%"></ProgressDone>
          </ProgressBar>
        </Progress> */}
      </AboutMeSecondCol>
    </AboutMeWrapper>
  );
};

export default About;
