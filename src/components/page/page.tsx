import Head from 'next/head';
import React from 'react';
import Styles from './page.styles';

interface PageProps {
  title?: string;
  children: React.ReactNode;
}

const Page: React.FunctionComponent<PageProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`${title || ''} ${
          title ? ' - ' : ''
        }Taddeo Lorenzo Motta`}</title>
      </Head>
      <Styles.Page>{children}</Styles.Page>
    </>
  );
};

export default Page;
