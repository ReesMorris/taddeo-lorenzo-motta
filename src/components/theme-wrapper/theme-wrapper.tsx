import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../global-style';
import themes from '../../themes';

interface ThemeWrapperProps {
  children: React.ReactNode;
}

const ThemeWrapper: React.FunctionComponent<ThemeWrapperProps> = ({
  children
}) => {
  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
