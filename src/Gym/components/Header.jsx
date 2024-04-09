import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../assets/css/Header.css";

const Header = ({}) => {
  const [active, setActive] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 90) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", checkScroll);

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const handleSidebar = () => setActive(false);

  return (
    <header className={isScroll ? "scrolled" : null}>
      <nav className={active ? "active" : null}>
        <ul>
          <li>
            <a href="#home" onClick={handleSidebar}>
              Home
            </a>
          </li>
          <li>
            <a href="#features" onClick={handleSidebar}>
              features
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleSidebar}>
              about
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={handleSidebar}>
              gallery
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleSidebar}>
              contact
            </a>
          </li>
        </ul>
      </nav>

      {active ? (
        <FaTimes id="menubar" onClick={() => setActive(!active)} />
      ) : (
        <FaBars id="menubar" onClick={() => setActive(!active)} />
      )}

      <div className="logo">
        <a href="#home">
          <h1>
            <span>Iron</span>Will
          </h1>
        </a>
      </div>
    </header>
  );
};

export default Header;
