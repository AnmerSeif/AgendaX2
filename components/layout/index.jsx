import React from 'react';
import Menu from '../_Menu';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Menu/>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
