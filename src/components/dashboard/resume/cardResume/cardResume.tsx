import React from 'react';
import './cardResume.scss';
const CardResume = ({ icon, number, title }: { icon?: string; number?: number; title?: string }) => {
  return (
    <div className="main-card-resume">
      <div className="card-resume-icon">
        {' '}
        <img className="resume-icon" src={icon}></img>
      </div>
      <div className="card-resume-menu">
        <div className="resume-menu-number">
          <label className="number">{number}</label>
        </div>
        <div className="resume-menu-title">
          <label className="title">{title}</label>
        </div>
      </div>
    </div>
  );
};

export default CardResume;
