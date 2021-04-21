import React from "react";
import { Link } from "react-scroll";

const NavDesktop = () => {
  return (
    <ul className="nav">
      <Link activeClass="active" to="hem" spy={true} smooth={true}>
        <li className="nav__item">Hem</li>
      </Link>

      <Link activeClass="active" to="about" spy={true} smooth={true}>
        <li className="nav__item">Om mig</li>
      </Link>
      <Link activeClass="active" to="service" spy={true} smooth={true}>
        <li className="nav__item">Priser</li>
      </Link>
      <Link activeClass="active" to="contact" spy={true} smooth={true}>
        <li className="nav__item">Kontakt</li>
      </Link>
    </ul>
  );
};

export default NavDesktop;
