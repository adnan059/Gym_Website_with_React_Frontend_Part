import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../assets/css/Home.css";
import shape_wave from "../assets/images/wave.svg";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <h1>get fit don't quit</h1>
        <h3>- commit to be fit -</h3>
        <a href="#">
          <button className="btn">Join Us</button>
        </a>

        <div className="icons">
          <FaFacebookF />
          <FaInstagram />
          <FaXTwitter />
        </div>

        <div className="shape-image">
          <img src={shape_wave} alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;
