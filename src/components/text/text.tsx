import React from 'react';
import Styles from './text.styles';

interface TextProps {
  as?: React.ElementType;
  children: React.ReactNode;
}

const Text: React.FunctionComponent<TextProps> = ({ as, children }) => {
  return (
    <Styles.Text as={as} design={as || 'p'}>
      {children}
    </Styles.Text>
  );
};

export default Text;
