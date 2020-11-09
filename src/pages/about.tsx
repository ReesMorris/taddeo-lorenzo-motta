import React from 'react';
import Heading from '../components/heading';
import Main from '../components/main';
import Page from '../components/page';
import Sidebar from '../components/sidebar';
import Text from '../components/text';

const About: React.FunctionComponent = () => {
  return (
    <Page>
      <Sidebar />
      <Main>
        <Heading>About</Heading>
        <Text>Coming soon.</Text>
      </Main>
    </Page>
  );
};

export default About;
