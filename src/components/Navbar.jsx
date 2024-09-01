import React from "react";
import "./style/bar.css";
import menuIcon from "../assets/menuicon.svg";
import searchIcon from "../assets/searchicon.svg";
import bellIcon from "../assets/bellicon.svg";
import msgIcon from "../assets/msgicon.svg";
import imgIcon from "../assets/imgicon.svg";
import arrowIcon from "../assets/arrowicon.svg";

const Navbar = () => {
  return (
    <nav className="navigation-bar">
      <div className="left-nav">
        <img src={menuIcon} alt="" className="lg:hidden"/>
        <input type="text" placeholder="Search" className="input-field"/>
        <img src={searchIcon} alt="" className="lg:absolute right-4" />
      </div>
      <div className="right-nav space-x-4">
        <img src={bellIcon} alt="" />
        <img src={msgIcon} alt="" />
        <img src={imgIcon} alt="" />
        <img src={arrowIcon} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
