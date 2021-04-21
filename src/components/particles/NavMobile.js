import React from "react";
import { Link } from "react-scroll";

const NavMobile = () => {
  return (
    <div className="nav_mobile">
      <input className="nav_mobile__input" id="toggle" type="checkbox" />
      <label className="nav_mobile__label" htmlFor="toggle">
        <svg
          className="nav_mobile__burger"
          width="86"
          height="60"
          viewBox="0 0 150 150"
        >
          <g strokeWidth="12">
            <line x1="6" y1="6" x2="80" y2="6"></line>
            <line x1="6" y1="28" x2="80" y2="28"></line>
            <line x1="6" y1="50" x2="80" y2="50"></line>
          </g>
        </svg>
        <svg
          className="nav_mobile__close"
          width="86"
          height="60"
          viewBox="0 0 150 150"
        >
          <g strokeWidth="12">
            <line x1="42" y1="6" x2="42" y2="80"></line>
            <line x1="6" y1="42" x2="80" y2="42"></line>
          </g>
        </svg>
      </label>
      <ul className="nav_mobile__menu">
        <Link activeClass="active" to="hem" spy={true} smooth={true}>
          <li className="nav_mobile__menu__item">Hem</li>
        </Link>

        <Link activeClass="active" to="about" spy={true} smooth={true}>
          <li className="nav_mobile__menu__item">Om mig</li>
        </Link>
        <Link activeClass="active" to="service" spy={true} smooth={true}>
          <li className="nav_mobile__menu__item">Priser</li>
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true}>
          <li className="nav_mobile__menu__item">Kontakt</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavMobile;
