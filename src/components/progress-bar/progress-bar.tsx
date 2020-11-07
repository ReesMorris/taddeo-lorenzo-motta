import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';

const ProgressBar: React.FunctionComponent = () => {
  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  return null;
};

export default ProgressBar;
