import React from "react";
import "../assets/css/IronWill.css";
import About from "./About";
import Contact from "./Contact";
import Features from "./Features";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Header from "./Header";
import Home from "./Home";

const IronWill = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default IronWill;
