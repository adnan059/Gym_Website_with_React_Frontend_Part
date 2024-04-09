import React from "react";
import "../assets/css/Contact.css";
import contactImage from "../assets/images/bb1.png";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">get in touch</h1>

        <div className="contact-container">
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="full name" />
            <input type="email" placeholder="email" />
            <textarea placeholder="message"></textarea>
            <input type="submit" value="Send" />
          </form>

          <div className="image">
            <img src={contactImage} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
