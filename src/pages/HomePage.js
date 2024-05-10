import React from "react";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Certificaciones from "../components/Certificaciones";
import Navbar from "../components/Navbar";
const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Main />
      <About />
      <Certificaciones />
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default HomePage;
