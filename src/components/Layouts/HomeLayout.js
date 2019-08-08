import React, { Fragment } from 'react';
import SideIntro from '../Common/SideIntro';

const HomeLayout = ({ children }) => (
  <main className="grid grid-container">
    <SideIntro />
    <div className="HomeLayout-grid">
      {children}
    </div>
  </main>
);

export default HomeLayout;