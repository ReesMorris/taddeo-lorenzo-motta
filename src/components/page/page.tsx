import React from 'react';
import Styles from './page.styles';

interface PageProps {
  children: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
  return <Styles.Page>{children}</Styles.Page>;
};

export default Page;
