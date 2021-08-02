import React, { useState } from "react";
import {
  ContactFirstCol,
  ContactSecondCol,
  ContactWrapper,
  Download,
  LinkWrapper,
  Resume,
  ResumeText,
} from "./StyleContact";
import resume from "../../images/resume.png";
import downloadIcon from "../../images/downloadicon.svg";
import { BgTag, BgTag2 } from "../../shared/Tag";

const Contact = () => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <ContactWrapper id="contact">
        <ContactFirstCol>
          <a href="Resume1.pdf" download>
            <div
              onMouseOver={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{ position: "relative" }}
            >
              {hover ? (
                <Download src={downloadIcon} alt="download"></Download>
              ) : (
                <></>
              )}
              <ResumeText>Resume</ResumeText>
              <Resume src={resume} alt="resume"></Resume>
            </div>
          </a>
        </ContactFirstCol>

        <ContactSecondCol>
          <h1 data-aos="fade-in">
            <BgTag>{"<h2>"}</BgTag>Contact Me
            <BgTag2>{"</h2>"}</BgTag2>
          </h1>
          <LinkWrapper data-aos="fade-in">
            <BgTag>{"<p>"}</BgTag>
            <div>Email: {"  "}tristanq816@gmail.com</div>
            <div>
              GitHub:{"  "}
              <a href="https://github.com/Tristan816la">
                https://github.com/Tristan816la
              </a>
            </div>
            <div>
              LinkdIn:{"  "}
              <a href="https://www.linkedin.com/in/tristanque2000/">
                https://www.linkedin.com/in/tristanque2000/
              </a>
            </div>
            <BgTag2>{"</p>"}</BgTag2>
          </LinkWrapper>
        </ContactSecondCol>
      </ContactWrapper>
    </>
  );
};

export default Contact;
