import React, { FC } from 'react';
import { MainContentLayoutModel } from './props.interface';
import './index.scss';

const MainContentLayout: FC<MainContentLayoutModel> = ({ children }) => {
  return <div className="container-main-content">{children}</div>;
};

export default MainContentLayout;
