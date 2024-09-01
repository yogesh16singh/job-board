import React from 'react';
import "../style/component.css";

const DashCards = (props) => {
  return (
    <div className='dashCards-container space-y-4' style={{ backgroundColor: props.bgc }}>
        <h2 className='h-Two-heading'>{props.hTwoTitle}</h2>
        <h1 className='h-One-heading'>{props.hOneNum}</h1>
        <h4 className='h-Four-heading' style={{ color: props.hFourColor }}>{props.hFourTitle}</h4>
    </div>
  )
}

export default DashCards