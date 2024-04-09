import React from "react";
import "../assets/css/Gallery.css";
import g1 from "../assets/images/g1.jpg";
import g2 from "../assets/images/g2.jpg";
import g3 from "../assets/images/g3.jpg";
import g4 from "../assets/images/g4.jpg";
import g5 from "../assets/images/g5.jpg";
import g6 from "../assets/images/g6.jpg";

const myImages = [g1, g2, g3, g4, g5, g6];

const Gallery = () => {
  return (
    <>
      <section className="gallery" id="gallery">
        <h1 className="heading">our latest products</h1>

        <div className="image-container">
          {myImages.map((img) => (
            <div className="image" key={Math.random()}>
              <img src={img} alt="" />
              <div className="info btn">
                <a href="#">view more</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
