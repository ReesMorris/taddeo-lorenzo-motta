import React from 'react';
import Head from 'next/head';
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
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;display=swap'
          rel='stylesheet'
        />
      </Head>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
