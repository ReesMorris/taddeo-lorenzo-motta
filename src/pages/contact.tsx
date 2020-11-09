import React from 'react';
import Heading from '../components/heading';
import Main from '../components/main';
import Page from '../components/page';
import Sidebar from '../components/sidebar';
import Text from '../components/text';

const Contact: React.FunctionComponent = () => {
  return (
    <Page>
      <Sidebar />
      <Main>
        <Heading>Contact</Heading>
        <Text>
          Send me an email at{' '}
          <a href='mailto:taddeomotta@gmail.com'>taddeomotta@gmail.com</a>.
        </Text>
      </Main>
    </Page>
  );
};

export default Contact;
