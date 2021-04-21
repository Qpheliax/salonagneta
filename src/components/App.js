import React, { useState, useEffect, useRef } from "react";
import { Element } from "react-scroll";
import "../styles/main.scss";
import Header from "./particles/Header";
import Hem from "./pages/Hem";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Footer from "./particles/Footer";

function App() {
  const [offsetY, setOffsetY] = useState(null);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  const offset = useRef();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    offset.current = offsetY;
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offsetY]);

  return (
    <>
      <Header />
      <Element name="hem">
        <Hem offset={offsetY} />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="service">
        <Service />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}

export default App;
