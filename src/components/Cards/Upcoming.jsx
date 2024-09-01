import React from "react";
import "../style/component.css";
import { IoIosArrowDown } from "react-icons/io";
import { SlOptions } from "react-icons/sl";

const Upcoming = () => {
  return (
    <div className="upcoming-container">
      <div className="upcoming-title">
        <h2 className="h-Two-heading-upcoming">Upcoming Schedule</h2>
        <h6 className="h-Six-heading">
          Today, 13 Sep 2021 <IoIosArrowDown className="ml-[10px]" />
        </h6>
      </div>

      <div className="upcoming-list mx-5">
        <h5 className="h-Five-heading-upcoming">Priority</h5>
        <div className="list-items-upcoming space-y-[5px]">
          <h4 className="h-Four-heading-upcoming">
            Review candidate applications
          </h4>
          <div className="flex items-center justify-between">
            <h6 className="h-Six-heading-list">5 Minutes ago</h6>
            <SlOptions className="text-[#b2b2b2]" />
          </div>
        </div>

        <h5 className="h-Five-heading-upcoming">Other</h5>
        <div className="list-items-upcoming mb-[6px] space-y-[5px]">
          <h4 className="h-Four-heading-upcoming">Interview with candidates</h4>
          <div className="flex items-center justify-between">
            <h6 className="h-Six-heading-list">Today - 10:30 AM</h6>
            <SlOptions className="text-[#b2b2b2]" />
          </div>
        </div>

        <div className="list-items-upcoming space-y-[5px]">
          <h4 className="h-Four-heading-upcoming">
            Short meeting with product designer from IT Departement{" "}
          </h4>
          <div className="flex items-center justify-between">
            <h6 className="h-Six-heading-list">Today - 09:15 AM</h6>
            <SlOptions className="text-[#b2b2b2]" />
          </div>
        </div>
      </div>
      <div className="see-all-upcoming">
        <span>Create a New Schedule</span>
      </div>
    </div>
  );
};

export default Upcoming;
