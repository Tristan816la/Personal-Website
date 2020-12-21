import React from "react";
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

const projects = [
  {
    title: "Twain",
    description:
      "A browser extension for Google calendar that will automatically schedule tasks in available calendar slots",
    image: twain,
    link:
      "https://chrome.google.com/webstore/detail/twain/cmljiidokkhmheonmpfciinfdonkimop/related",
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
    title: "Stylistic UCLA",
    description:
      "An AI to combine features of different images and achieve artistic effects",
    image: stylisticucla,
    link:
      "https://github.com/Tristan816la/Neural-Style-Transfer-Stylistic-UCLA",
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
    title: "Topo Sort Git Commits",
    description:
      "A Python Script to create a topological ordering of Git commits without using Git commands",
    image: toposort,
    link: "https://github.com/Tristan816la/Topological-Sort-Git-Commit",
    techstack: "Python, Git & Git Internals",
  },
  {
    title: "Mini Rougue Dungeon",
    description:
      "A Rougue-like game with comprehensive features including the turn-based fighting system, item buildings, and different monster mechanisms ",
    image: minirougue,
    link: "https://github.com/Tristan816la/Mini-Rouge-Dungeon",
    techstack: "C++",
  },
];

const Project = () => {
  return (
    <ProjectWrapper id="project">
      <ProjectTitle data-aos="zoom-in">Projects</ProjectTitle>
      <Cards data-aos="zoom-in">
        {projects.map((p, i) => (
          <CardContainer key={i}>
            <Card>
              <CardFront>
                <img src={p.image} alt="twain"></img>
              </CardFront>

              <CardBack>
                <h1>{p.title}</h1>
                <p>
                  {p.description}
                  <br />
                  <br />
                  <Techstack>{p.techstack}</Techstack>
                </p>
                <a href={p.link}>View Project</a>
              </CardBack>
            </Card>
          </CardContainer>
        ))}
      </Cards>
    </ProjectWrapper>
  );
};

export default Project;
