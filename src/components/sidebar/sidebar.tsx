import React from 'react';
import Styles from './sidebar.styles';

const Sidebar: React.FunctionComponent = () => {
  return (
    <Styles.Sidebar>
      <Styles.Title>Taddeo Lorenzo Motta</Styles.Title>
      <nav>
        <ul>
          <Styles.NavItem>About</Styles.NavItem>
          <Styles.NavItem>Contact</Styles.NavItem>
        </ul>
      </nav>
    </Styles.Sidebar>
  );
};

export default Sidebar;
