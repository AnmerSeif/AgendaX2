import React from 'react';
import Menu from '../_Menu';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Menu/>
      <main>{children}</main>
      <style jsx global>{`
        nav {
          text-align: center;
        }
        nav a {
          margin-right: 2px;

          padding: 4px;
        }

        main {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Layout;
