import React, { Fragment } from 'react';
import SideIntro from '../Common/SideIntro';

const HomeLayout = ({ children }) => (
  <Fragment>
    <div className="grid grid-container">
      <SideIntro />
      <main>{children}</main>
    </div>    
  </Fragment>
);

export default HomeLayout;