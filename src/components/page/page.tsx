import React from 'react';
import Styles from './page.styles';

interface PageProps {
  children: React.ReactNode;
}

const Page: React.FunctionComponent<PageProps> = ({ children }) => {
  return <Styles.Page>{children}</Styles.Page>;
};

export default Page;
