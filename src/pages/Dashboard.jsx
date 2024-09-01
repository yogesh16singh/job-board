import React from "react";
import "./style/Dashboard.css";
import Navbar from "../components/Navbar";
import DashCards from "../components/Cards/DashCards";
import TotalCards from "../components/Cards/TotalCards";
import AnnoucementCard from "../components/Cards/AnnoucementCard";
import RecentCard from "../components/Cards/Recent";
import UpcomingCard from "../components/Cards/Upcoming";
import empGraph from "../assets/empgraph.svg";
import reqGraph from "../assets/reqgraph.svg";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-components space-y-4 lg:space-y-0 mt-[70px] lg:mt-[102px] grid justify-items-center lg:justify-items-start lg:content-center lg:grid-cols-2">
        <div className="dash-title lg:col-span-2">
          <span className="dash-title-span">Dashboard</span>
        </div>
        <div className="first-column space-y-4">
          <div className="dashCard-components space-y-4 lg:space-y-0 grid lg:grid-cols-3">
            <DashCards
              bgc="#FFEFE7"
              hTwoTitle="Available Position"
              hOneNum="24"
              hFourTitle="4 Urgently needed"
              hFourColor="#FF5151"
            />
            <DashCards
              bgc="#E8F0FB"
              hTwoTitle="Job Open"
              hOneNum="10"
              hFourTitle="4 Active hiring"
              hFourColor="#3786F1"
            />
            <DashCards
              bgc="#FDEBF9"
              hTwoTitle="New Employees"
              hOneNum="24"
              hFourTitle="4 Department"
              hFourColor="#EE61CF"
            />
          </div>
          <div className="totalCards-components space-y-4 lg:space-y-0 grid lg:grid-cols-2">
            <TotalCards
              hTwoTitle="Total Employees"
              hOneNum="216"
              menNum="120"
              womenNum="96"
              growthRate="2"
              svgFile={empGraph}
            />
            <TotalCards
              hTwoTitle="Talent Request"
              hOneNum="16"
              menNum="6"
              womenNum="10"
              growthRate="5"
              svgFile={reqGraph}
            />
          </div>
          <AnnoucementCard />
        </div>
        <div className="second-column space-y-4">
          <RecentCard />
          <UpcomingCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
