import React from 'react';
import Styles from './main.styles';

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FunctionComponent<MainProps> = ({ children }) => {
  return <Styles.Main>{children}</Styles.Main>;
};

export default Main;
