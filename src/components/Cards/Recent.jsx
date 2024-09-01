import React from "react";
import "../style/component.css";

const Recent = () => {
  return (
    <div className="recent-container space-y-6">
      <nav className="recent-nav-title">Recently Activity</nav>
      <div className="recent-first-div px-5 space-y-[7px]">
        <h5 className="h-Five-heading-recent">10.40 AM, Fri 10 Sept 2021</h5>
        <h2 className="h-Two-heading-recent">You Posted a New Job</h2>
        <h4 className="h-Four-heading-recent">
          Kindly check the requirements and terms of work and make sure
          everything is right.
        </h4>
      </div>
      <div className="recent-second-div px-5 space-y-[18px] xl:space-y-0">
        <h4 className="h-Four-heading-recent">Today you make 12 Activity</h4>
        <button className="recent-btn">See All Activity</button>
      </div>
    </div>
  );
};

export default Recent;
