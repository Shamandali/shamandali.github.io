import './selectSlider.scss';
import React from 'react';
const SelectSlider = ({ icon, title, navigate }: { icon?: string; title?: string; navigate?: boolean }) => {
  return (
    <div className="main-card-select">
      <img className="icon-select" src={icon}></img>
      <label className="label">{title}</label>
      {navigate ? <img className="arrow" src="/images/arrow.svg"></img> : ''}
    </div>
  );
};

export default SelectSlider;
