import React from 'react';
import Link from 'next/link';
import Styles from './sidebar.styles';

const Sidebar: React.FunctionComponent = () => {
  return (
    <Styles.Sidebar>
      <Styles.Title>
        <Link href='/'>Taddeo Lorenzo Motta</Link>
      </Styles.Title>
      <nav>
        <ul>
          <Styles.NavItem>
            <Link href='/about'>About</Link>
          </Styles.NavItem>
          <Styles.NavItem>
            <Link href='/contact'>Contact</Link>
          </Styles.NavItem>
        </ul>
      </nav>
    </Styles.Sidebar>
  );
};

export default Sidebar;
