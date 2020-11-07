import React from 'react';
import Main from '../components/main';
import Page from '../components/page';
import Sidebar from '../components/sidebar';

const About: React.FunctionComponent = () => {
  return (
    <Page>
      <Sidebar />
      <Main>
        <p>About</p>
      </Main>
    </Page>
  );
};

export default About;
