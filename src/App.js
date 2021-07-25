import "./App.css";
import Cover from "./Pages/Cover/Cover";
import About from "./Pages/About/About";
import Sidebar from "./Components/Sidebar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Project from "./Pages/Project/Project";
import Contact from "./Pages/Contact/Contact";
import axios from "axios";
axios.defaults.baseURL = "https://chatbot-tristan.herokuapp.com";

function App() {
  useEffect(() => {
    const wakeup = async () => {
      await axios.get("/");
    };
    AOS.init({
      duration: 500,
      easing: "linear",
    });
    wakeup();
  }, []);

  return (
    <div className="App">
      <Sidebar className="Sidebar"></Sidebar>
      <div className="Content">
        <Cover></Cover>
        <About></About>
        <Project></Project>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
