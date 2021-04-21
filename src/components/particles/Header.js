import React from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <header className="header">
      <NavMobile />
      <NavDesktop />
    </header>
  );
};

export default Header;
