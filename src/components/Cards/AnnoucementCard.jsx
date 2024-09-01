import React from "react";
import "../style/component.css";
import { IoIosArrowDown } from "react-icons/io";
import { RiPushpinFill } from "react-icons/ri";
import { SlOptions } from "react-icons/sl";

const AnnoucementCard = () => {
  return (
    <div className="annoucement-container">
      <div className="annoucement-title">
        <h2 className="h-Two-heading-annouce">Annoucement</h2>
        <h6 className="h-Six-heading">
          Today, 13 Sep 2021 <IoIosArrowDown className="ml-[10px]" />
        </h6>
      </div>
      <div className="annouce-list mx-5 space-y-2 lg:space-y-1">
        <div className="list-items space-y-[5px]">
          <h4 className="h-Four-heading-annouce">
            Outing schedule for every department
          </h4>
          <div className="flex items-center justify-between">
            <h6 className="h-Six-heading-list">5 Minutes ago</h6>
            <span className="flex items-center space-x-[10px]">
              <RiPushpinFill className="text-[#686868]" />{" "}
              <SlOptions className="text-[#b2b2b2]" />
            </span>
          </div>
        </div>

        <div className="list-items space-y-[5px]">
          <h4 className="h-Four-heading-annouce">Meeting HR Department</h4>
          <div className="flex items-center justify-between">
            <h6 className="h-Six-heading-list">Yesterday, 12:30 PM</h6>
            <span className="flex items-center space-x-[10px]">
              <RiPushpinFill className="text-[#b2b2b2]" />{" "}
              <SlOptions className="text-[#b2b2b2]" />
            </span>
          </div>
        </div>

        <div className="list-items space-y-[5px]">
          <h4 className="h-Four-heading-annouce">
            IT Department need two more talents for UX/UI Designer position
          </h4>
          <div className="flex items-center justify-between">
            <h6 className="h-Six-heading-list">Yesterday, 09:15 AM</h6>
            <span className="flex items-center space-x-[10px]">
              <RiPushpinFill className="text-[#b2b2b2]" />{" "}
              <SlOptions className="text-[#b2b2b2]" />
            </span>
          </div>
        </div>
      </div>
      <div className="see-all">
        <span>See All Annoucement</span>
      </div>
    </div>
  );
};

export default AnnoucementCard;

