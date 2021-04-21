import React from "react";
import Logo from "../particles/Logo";
import SocialIcons from "../particles/SocialIcons";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__logo">
        <Logo />
        <span className="footer__logo__text">Salong Agneta</span>
      </section>
      <section className="footer__info">
        <ul>
          <li>
            <h4 className="h4">Adress:</h4>
            <p>Hesekillegatan 56</p>
            <p>231 54 Trelleborg</p>
          </li>
        </ul>
      </section>
      <section className="footer__info">
        <ul>
          <li>
            <h4 className="h4">Öppettider:</h4>
            <p>Mån – fre 10:00 – 18:00</p>
            <p>Lördag 11:00 – 16:00</p>
            <p>Söndag 11:00 – 16:00</p>
          </li>
        </ul>
      </section>
      <section className="footer__info">
        <ul>
          <li>
            <h4 className="h4">E-post:</h4>
            <a href="mailto:salong@agneta.se">mailto:salong@agneta.se</a>
          </li>

          <li>
            <h4 className="h4">Sociala medier:</h4>
            <SocialIcons />
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
