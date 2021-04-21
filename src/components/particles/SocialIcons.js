import React from "react";
import { IconContext } from "react-icons";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const SocialIcons = () => {
  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <div className="social">
        <AiFillFacebook />
        <AiFillTwitterSquare />
        <AiFillInstagram />
      </div>
    </IconContext.Provider>
  );
};

export default SocialIcons;
