import React from 'react';
import Main from '../components/main';
import Page from '../components/page';
import Sidebar from '../components/sidebar';

const Index: React.FunctionComponent = () => {
  return (
    <Page>
      <Sidebar />
      <Main>Main content</Main>
    </Page>
  );
};

export default Index;
