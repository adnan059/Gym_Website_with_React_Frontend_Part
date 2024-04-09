import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer-container">
          <div className="box box-1">
            <h1>
              <span>Iron</span>Will
            </h1>
            <div className="icons">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
          <div className="box box-2">
            <div className="cw">
              <FaMapMarkerAlt className="cwicon" />
              ABC St, NY, USA
            </div>
            <div className="cw">
              <FaEnvelope className="cwicon" /> abc@ymail.com
            </div>
            <div className="cw">
              <FaPhoneAlt className="cwicon" /> +12345678
            </div>
          </div>
          <div className="box box-3">
            <h1>Newsletter</h1>
            <p>submit your email for latest updates</p>
            <input type="email" placeholder="email" />
            <button className="btn">submit</button>
          </div>
        </div>
        <div className="credit">
          Created By <span>Md Adnan Faruk</span> | all rights reserved
        </div>
      </section>
    </>
  );
};

export default Footer;
