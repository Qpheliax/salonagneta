import React from "react";

import Logo from "../particles/Logo";

const Hem = (props) => {
  return (
    <>
      <section className="hem">
        <div
          className="hem__background"
          style={{ transform: `translateY(${props.offset * 0.2}px)` }}
        >
          <div className="hem__background__layer"></div>
        </div>
        <div className="logo_palace">
          <div className="logo_palace__logo">
            <Logo />
            <p>Salong Agneta</p>
          </div>
        </div>
        <div className="infobanner">
          <p>
            Salong Agneta <span>&#8739;</span> Telefon: 0410-441 50{" "}
            <span>&#8739;</span> Adress: Hesekillegatan 56, 231 54 Trelleborg{" "}
            <span>&#8739;</span> E-post:{" "}
            <a href="mailto:salong@agneta.se">mailto:salong@agneta.se</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Hem;
