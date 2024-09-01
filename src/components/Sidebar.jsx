import React from "react";
import "./style/bar.css";
import Logo from "../assets/SideBarAssets/logo.svg";
import dashIcon from "../assets/SideBarAssets/dashicon.svg";
import recruIcon from "../assets/SideBarAssets/addicon.svg";
import scheduleIcon from "../assets/SideBarAssets/schedule.svg";
import empIcon from "../assets/SideBarAssets/emp.svg";
import departIcon from "../assets/SideBarAssets/depart.svg";
import { BiSupport } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";

const Sidebar = () => {
  return (
    <nav className="side-nav-bar space-y-[39px]">
      <div className="logo-div">
        <img src={Logo} alt="" />
      </div>
      <ul className="main-menu-items">
        <h4 className="main-menu-title">Main Menu</h4>
        <li>
          <img src={dashIcon} alt="" /> <span className="text-[#ff1212]">Dashboard</span>
        </li>
        <li>
          <img src={recruIcon} alt="" /> Recruitment
        </li>
        <li>
          <img src={scheduleIcon} alt="" /> Schedule
        </li>
        <li>
          <img src={empIcon} alt="" /> Employee
        </li>
        <li>
          <img src={departIcon} alt="" />
          Department
        </li>
      </ul>
      <ul className="other-items">
        <h4 className="other-title">Other</h4>
        <li>
          <BiSupport />
          Support
        </li>
        <li>
          <IoSettingsSharp /> Settings
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
