import React, { Fragment } from "react";
import {
  Cards,
  ProjectTitle,
  ProjectWrapper,
  Card,
  CardFront,
  CardBack,
  CardContainer,
  Techstack,
} from "./StyleProject";

import twain from "../../images/twain.jpg";
import bruinshare from "../../images/bruinshare.png";
import stylisticucla from "../../images/stylisticucla.png";
import hackerhub from "../../images/hackerhub.png";
import toposort from "../../images/toposort.png";
import minirougue from "../../images/minirougue.png";
import embark from "../../images/embark.png";
import compined from "../../images/compined.png";
import connection from "../../images/connection.png";
import pigz from "../../images/pigz.png";
import { useWindowSize } from "../../shared/Hook";
import { BgTag, BgTag2 } from "../../shared/Tag";

const projects = [
  {
    title: "Embark",
    description:
      "A student-help-student platform that aims to provide the best industry resources for UCLA students, tech-leaded by me",
    image: embark,
    techstack: "React, MongoDB, Express",
    link: "https://github.com/ucladevx/embark-frontend",
  },
  {
    title: "Compined",
    description:
      "A sign-up free platform with full-chatting experiences cofounded by me and Tony",
    image: compined,
    link: "https://compined.com",
    techstack: "React, React Native, Socket.io",
  },
  {
    title: "Twain",
    description:
      "A browser extension for Google calendar that will automatically schedule tasks in available calendar slots",
    image: twain,
    link: "https://chrome.google.com/webstore/detail/twain/cmljiidokkhmheonmpfciinfdonkimop/related",
    techstack: "React, Styled Components",
  },
  {
    title: "Bruin Share",
    description:
      "A web application that helps connect UCLA students around the world during COVID-19 pandemic",
    image: bruinshare,
    link: "https://bruin-share.netlify.app/",
    techstack: "MongoDB, Express, React, Node",
  },
  {
    title: "JPigz",
    image: pigz,
    link: "https://github.com/Tristan816la/Pigzj",
    description:
      "A Java implementation of Pigz, a multithreaded compressor (3+ times faster than gzip)",
    techstack: "Java",
  },
  {
    title: "TopoGit",
    description:
      "A Python Script to create a topological ordering of Git commits without using Git commands",
    image: toposort,
    link: "https://github.com/Tristan816la/Topological-Sort-Git-Commit",
    techstack: "Python, Git & Git Internals",
  },
  {
    title: "Rougue Dungeon",
    description:
      "A Rougue-like game with features including the turn-based fighting system, item buildings, and many monster mechanisms ",
    image: minirougue,
    link: "https://github.com/Tristan816la/Mini-Rouge-Dungeon",
    techstack: "C++",
  },
  {
    title: "Stylistic UCLA",
    description:
      "An AI to combine features of different images and achieve artistic effects",
    image: stylisticucla,
    link: "https://github.com/Tristan816la/Neural-Style-Transfer-Stylistic-UCLA",
    techstack: "Python, Jupyter Notebook, Tensorflow",
  },
  {
    title: "Hackerhub",
    description:
      "A fullstack web app serving as a forum for hackers, setting up the frontend and backend through individual efforts",
    image: hackerhub,
    link: "https://hackerhub-420f2.web.app/",
    techstack: "Firebase, Express, React, Node",
  },
  {
    title: "Connection",
    image: connection,
    link: "https://features.dailybruin.com/2021/connection/#/",
    description:
      "A web page I built at Daily Bruin to showcase UCLA community and experiences under pandemics",
    techstack: "React, Styled Components",
  },
];

const Project = () => {
  const { width } = useWindowSize();
  return (
    <ProjectWrapper id="project">
      <ProjectTitle data-aos="zoom-in">
        <BgTag>{"<h2>"}</BgTag>Projects<BgTag2>{"</h2>"}</BgTag2>
      </ProjectTitle>
      <Cards data-aos="zoom-in">
        {projects.map((p, i) => {
          if ((width < 800 && i < 6) || width > 800)
            return (
              <CardContainer key={i}>
                <Card>
                  <CardFront>
                    <img src={p.image} alt="twain"></img>
                  </CardFront>

                  <CardBack>
                    <h1>{p.title}</h1>
                    <span>
                      {p.description}
                      <br />
                      <br />
                      <Techstack>{p.techstack}</Techstack>
                    </span>
                    {p.link && <a href={p.link}>View Project</a>}
                  </CardBack>
                </Card>
              </CardContainer>
            );
          else {
            return <Fragment key={i}></Fragment>;
          }
        })}
      </Cards>
    </ProjectWrapper>
  );
};

export default Project;
