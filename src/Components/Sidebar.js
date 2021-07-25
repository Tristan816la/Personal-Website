import styled, { keyframes } from "styled-components";
import React, { useState, useEffect } from "react";
import HomeIcon from "../images/homeIcon.svg";
import ProfileIcon from "../images/profileIcon.svg";
import ProjectIcon from "../images/projectIcon.svg";
import ContactIcon from "../images/contactIcon.svg";
import Menu from "../images/menuIcon.svg";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import { Link } from "react-scroll";
import { darkGray, mobile } from "../Style";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000000;
  justify-content: center;
  height: 100vh;
  width: 50px;
  color: #ffffff;
  position: fixed;

  ${mobile} {
    display: none;
    height: 5vh;
    width: 100vw;
    justify-content: space-around;
    align-items: center;
    /* position: absolute; */
    /* background: ${darkGray}; */
    z-index: 100;
    flex-direction: row;
    & img {
      width: 20px;
    }
  }
`;

const SideBarIcon = styled.img`
  width: 30px;
  &:hover {
    cursor: pointer;
  }
  animation: ${fadeIn} 0.5s;
`;

const SideBarItemWrapper = styled.div`
  height: 30px;
  width: 90%;
  display: flex;
  margin-top: auto;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

const SideBarText = styled.div`
  font-size: 10px;
  text-align: center;
  width: 100%;
  color: #e5aeb9;
  animation: ${fadeIn} 0.5s;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: auto;
  margin-bottom: -120px;
  ${mobile} {
    display: ${(props) => (props.show ? "flex" : "none")};
    gap: 30px;
    flex-direction: row;
    margin-bottom: 0px;
  }
`;

const ContactWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  ${mobile} {
    display: ${(props) => (props.show ? "flex" : "none")};
    margin-bottom: 6px;
    flex-direction: row;
    gap: 20px;
  }
`;

const ContactItem = styled.img`
  width: 30px;
  display: flex;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  animation: ${fadeIn} 0.5s;
`;

const MenuIcon = styled.img`
  display: none;
  ${mobile} {
    display: block;
    margin-top: 10px;
    margin-right: -50px;
  }
`;

const SideBarItem = ({ hover, item, itemImg, onMouseOver, onMouseLeave }) => {
  const [text, setText] = useState(false);
  useEffect(() => {
    setText(hover);
  }, [hover]);

  return (
    <SideBarItemWrapper onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {text ? (
        <SideBarText>{item}</SideBarText>
      ) : (
        <SideBarIcon src={itemImg}></SideBarIcon>
      )}
    </SideBarItemWrapper>
  );
};

const Sidebar = () => {
  const [homeHover, setHomeHover] = useState(false);
  const [profileHover, setProfileHover] = useState(false);
  const [projectHover, setProjectHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseOver = (attr) => {
    if (attr === "home") {
      setHomeHover(true);
    } else if (attr === "profile") {
      setProfileHover(true);
    } else if (attr === "project") {
      setProjectHover(true);
    } else {
      setContactHover(true);
    }
  };

  const handleMouseLeave = (attr) => {
    if (attr === "home") {
      setHomeHover(false);
    } else if (attr === "profile") {
      setProfileHover(false);
    } else if (attr === "project") {
      setProjectHover(false);
    } else {
      setContactHover(false);
    }
  };

  return (
    <div>
      <SideBarWrapper>
        <div style={{ marginTop: "-120px" }}></div>
        <LinkWrapper show={showMenu}>
          <Link to="home" smooth={true}>
            <SideBarItem
              item="Home"
              itemImg={HomeIcon}
              hover={homeHover}
              onMouseOver={() => handleMouseOver("home")}
              onMouseLeave={() => handleMouseLeave("home")}
            ></SideBarItem>
          </Link>
          <Link to="about" smooth={true}>
            <SideBarItem
              item="About me"
              itemImg={ProfileIcon}
              hover={profileHover}
              onMouseOver={() => handleMouseOver("profile")}
              onMouseLeave={() => handleMouseLeave("profile")}
            ></SideBarItem>
          </Link>
          <Link to="project" smooth={true}>
            <SideBarItem
              item="Project & Experiences"
              itemImg={ProjectIcon}
              hover={projectHover}
              onMouseOver={() => handleMouseOver("project")}
              onMouseLeave={() => handleMouseLeave("project")}
            ></SideBarItem>
          </Link>
          <Link to="contact" smooth={true}>
            <SideBarItem
              item="Contact me"
              itemImg={ContactIcon}
              hover={contactHover}
              onMouseOver={() => handleMouseOver("contact")}
              onMouseLeave={() => handleMouseLeave("contact")}
            ></SideBarItem>
          </Link>
        </LinkWrapper>
        <ContactWrapper show={showMenu}>
          <a href="https://www.linkedin.com/in/tristanque2000/">
            <ContactItem src={linkedin}></ContactItem>
          </a>
          <a href="https://github.com/Tristan816la">
            <ContactItem src={github}></ContactItem>
          </a>
        </ContactWrapper>
        <MenuIcon
          src={Menu}
          alt="Menu"
          show={showMenu}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        ></MenuIcon>
      </SideBarWrapper>
    </div>
  );
};

export default Sidebar;
