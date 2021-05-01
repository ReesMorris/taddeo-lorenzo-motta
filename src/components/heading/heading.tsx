import React from 'react';
import Styles from './heading.styles';

interface HeadingProps {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ as = 'h1', children, className }: HeadingProps) => {
  return (
    <Styles.Heading as={as} className={className}>
      {children}
    </Styles.Heading>
  );
};

export default Heading;
