import React, { useState } from "react";
import {
  CoverFirstCol,
  CoverSecondCol,
  CoverTitle,
  CoverWrapper,
  CoverName,
  AiMessage,
  MyMessage,
  MessageWrapper,
  MessageBox,
  PromptWrapper,
  SendButton,
  ContactMe,
} from "./StyleCover";
import { BgTag, BgTag2 } from "../../shared/Tag";
import Dropdown from "../../Components/Dropdown";
import sendIcon from "../../images/sendIcon.svg";
import { Link, scroller } from "react-scroll";
import axios from "axios";

const Cover = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const [chats, setChats] = useState([
    {
      content:
        "Hi! I'm Tristan's AI, how can I help you? (I need to wake up so your first q I might be slow)",
      type: "ai",
    },
  ]);
  const handlePrompt = () => {
    if (!value.trim().length) handleOpen();
    else handleClose();
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSelect = (val) => {
    setValue(val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = value;
    let newChats = [...chats, { content: body, type: "me" }];

    if (newChats.length >= 9) {
      newChats.shift();
      newChats.shift();
      console.log(chats);
    }
    setChats([...newChats]);

    const res = await axios.post("/", { body });
    setChats([...newChats, { content: res.data.message, type: "ai" }]);
    if (res.data.message === "Sure, there we go!") {
      scroller.scrollTo("project", {
        duration: 1000,
        delay: 200,
        smooth: "easeInOutQuart",
      });
    }
    setValue("");
  };

  return (
    <>
      <CoverWrapper id="home">
        <CoverFirstCol>
          <CoverTitle>
            <BgTag ml={-15}>{"<title>"}</BgTag>
            <BgTag>{"<h1>"}</BgTag>
            Hi, <br /> I'm <CoverName>Tristan</CoverName>, <br /> an enthusiast
            of web development and machine learning. <BgTag2>{"</h1>"}</BgTag2>
          </CoverTitle>

          <Link to="contact" smooth={true}>
            <ContactMe>Contact Me</ContactMe>
          </Link>
          <BgTag mt={25} ml={-15}>
            {"</title>"}
          </BgTag>
        </CoverFirstCol>

        <CoverSecondCol>
          {chats.map((c, i) => {
            return c && c.type === "ai" ? (
              <AiMessage key={i + c}>{c.content}</AiMessage>
            ) : (
              <MyMessage key={i + c}>{c.content}</MyMessage>
            );
          })}

          <PromptWrapper>
            <Dropdown
              open={open}
              items={[
                "Who is Tristan?",
                "50 + 162?",
                "Show me Tristan's projects!",
                "How to contact with Tristan?",
              ]}
              onClose={handleClose}
              onSelect={handleSelect}
            ></Dropdown>
          </PromptWrapper>

          <MessageWrapper onSubmit={handleSubmit}>
            <MessageBox
              placeholder="Ask about Tristan!"
              onSelect={handlePrompt}
              onChange={handleChange}
              value={value}
            ></MessageBox>

            <SendButton
              src={sendIcon}
              onClick={handleSubmit}
              type="submit"
            ></SendButton>
          </MessageWrapper>
        </CoverSecondCol>
      </CoverWrapper>
    </>
  );
};

export default Cover;
