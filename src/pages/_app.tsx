import type { AppProps } from 'next/app';

import React from 'react';
import ThemeWrapper from '../components/theme-wrapper';

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeWrapper>
        <Component {...pageProps} />
      </ThemeWrapper>
    </>
  );
};

export default App;
