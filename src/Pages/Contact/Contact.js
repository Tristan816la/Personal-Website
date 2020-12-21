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

const Contact = () => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <ContactWrapper id="contact">
        <ContactFirstCol>
          <a href="https://drive.google.com/file/d/1lhcIkM-QjFKwI7y0Dh1HpC6RqD4cUk3u/view?usp=sharing">
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
          <h1 data-aos="fade-in">Contact Me</h1>
          <LinkWrapper data-aos="fade-in">
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
          </LinkWrapper>
        </ContactSecondCol>
      </ContactWrapper>
    </>
  );
};

export default Contact;
