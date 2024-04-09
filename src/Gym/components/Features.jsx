import React from "react";
import "../assets/css/Features.css";
import { featuresData } from "./../assets/data/data";

const Features = () => {
  return (
    <>
      <section id="features" className="features">
        <h1 className="heading">feature</h1>
        <div className="card-container">
          {featuresData.map((ftr) => (
            <div className="card" key={Math.random()}>
              <img src={ftr.pic} alt="" />
              <div className="content">
                <h1>{ftr.title}</h1>
                <p>{ftr.desc}</p>
                <a href="#">
                  <button className="btn">Learn More</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Features;
