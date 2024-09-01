import React from "react";


const TotalCards = (props) => {
  return (
    <div className="totalCards-container">

      <div className="total-left-div space-y-8">
        <h2 className="h-Two-heading-total">{props.hTwoTitle}</h2>
        <h1 className="h-One-heading-total">{props.hOneNum}</h1>
        <div className="total-left-lower-div space-y-1">
          <h5 className="h-Five-heading-total">{props.menNum} Men</h5>
          <h5 className="h-Five-heading-total">{props.womenNum} Women</h5>
        </div>
      </div>

      <div className="total-right-div space-y-5">
        <img src={props.svgFile} alt="" />
        <h5 className="h-Five-heading-total-right">
          +{props.growthRate}% Past month
        </h5>
      </div>
      
    </div>
  );
};

export default TotalCards;
