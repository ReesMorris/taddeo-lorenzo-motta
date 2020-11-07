import React from 'react';
import Main from '../components/main';
import Page from '../components/page';
import Sidebar from '../components/sidebar';

const Contact: React.FunctionComponent = () => {
  return (
    <Page>
      <Sidebar />
      <Main>
        <p>Contact</p>
      </Main>
    </Page>
  );
};

export default Contact;
