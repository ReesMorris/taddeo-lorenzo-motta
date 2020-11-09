import React from 'react';
import Styles from './heading.styles';

interface HeadingProps {
  as?: React.ElementType;
  children: React.ReactNode;
}

const Heading: React.FunctionComponent<HeadingProps> = ({ as, children }) => {
  return (
    <Styles.Heading as={as} design={as || 'h1'}>
      {children}
    </Styles.Heading>
  );
};

export default Heading;
