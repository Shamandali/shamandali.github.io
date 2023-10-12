import React, { FC } from 'react';
import Slider from '../slider';
import Dashboard from '../dashboard/dashboard';
import './index.scss';

const MainLayout: FC<any> = ({ children }) => {
  return (
    <div className="main-panel">
      <div className="main-slider">
        <Slider />
      </div>
      <div className="main-form">
        <Dashboard>{children}</Dashboard>
      </div>
    </div>
  );
};

export default MainLayout;
