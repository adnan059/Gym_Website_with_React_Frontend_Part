import React from "react";
import "../assets/css/About.css";
import aboutImage from "../assets/images/running.png";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="aboutImage">
          <img src={aboutImage} alt="" />
        </div>
        <div className="aboutContent">
          <h1 className="heading">Why Should You Choose Us?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
            temporibus. Sint maxime porro vero odio aspernatur autem soluta enim
            nihil exercitationem quae! Explicabo, atque labore.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            asperiores eum sunt ab in. Iusto placeat unde earum maiores autem.
            Et expedita vel aliquid facilis libero nisi illo nostrum
            praesentium!
          </p>
          <h1 className="heading">Our gym includes</h1>
          <div className="buttons">
            <button className="btn">Training</button>
            <button className="btn">exercise</button>
            <button className="btn">Treadmill</button>
            <button className="btn">bicyle</button>
            <button className="btn">barbell</button>
            <button className="btn">dumbbell</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
