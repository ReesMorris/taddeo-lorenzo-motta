import React from 'react';
import Styles from './main.styles';

interface MainProps {
  noPadding?: boolean;
  children: React.ReactNode;
}

const Main: React.FunctionComponent<MainProps> = ({ noPadding, children }) => {
  return <Styles.Main noPadding={noPadding}>{children}</Styles.Main>;
};

export default Main;
