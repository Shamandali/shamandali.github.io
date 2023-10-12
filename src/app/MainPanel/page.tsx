import Dashboard from '@/components/dashboard/dashboard';
import Slider from '@/components/slider';
import React from 'react';
import './index.scss';
const MainPanel = () => {
  return (
    <div className="main-panel">
      <div className="main-slider">
        <Slider />
      </div>
      <div className="main-form">
        <Dashboard />
      </div>
    </div>
  );
};

export default MainPanel;
