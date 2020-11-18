import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import ProgressBar from '../components/progress-bar';
import ThemeWrapper from '../components/theme-wrapper';

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;display=swap'
          rel='stylesheet'
        />
      </Head>
      <ThemeWrapper>
        <ProgressBar />
        <Component {...pageProps} />
      </ThemeWrapper>
    </>
  );
};

export default App;
