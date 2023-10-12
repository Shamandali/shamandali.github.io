import React from 'react';
import './cardResume.scss';
const CardResume = ({ icon, number }: { icon?: string; number?: number }) => {
  return (
    <div className="card-resume-account">
      <div className="resume-icon">
        <img className="icon" src={icon}></img>
      </div>
      <div className="menu-number">
        <label className="number">{number}</label>
      </div>
    </div>
  );
};

export default CardResume;
