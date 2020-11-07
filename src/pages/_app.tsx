import type { AppProps } from 'next/app';
import React from 'react';
import ProgressBar from '../components/progress-bar';
import ThemeWrapper from '../components/theme-wrapper';

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeWrapper>
        <ProgressBar />
        <Component {...pageProps} />
      </ThemeWrapper>
    </>
  );
};

export default App;
