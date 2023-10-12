import React, { FC } from 'react';
import './dashboard.scss';

const Dashboard: FC<any> = ({ children }) => {
  return (
    <div className="main-dashboard">
      <div className="container-navbar"></div>
      <div className="container-dashboard">
        <div className="container-breadcrumb">CUENTAS</div>
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
