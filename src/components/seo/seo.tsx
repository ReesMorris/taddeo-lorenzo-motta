import React from 'react';
import Head from 'next/head';

export interface ISEO {
  title?: string;
}

const SEO = ({ title }: ISEO) => {
  const formatTitle = () => {
    const name = 'Taddeo Lorenzo Motta';
    return title ? `${title} - ${name}` : name;
  };

  return (
    <Head>
      <title>{formatTitle()}</title>
    </Head>
  );
};

export default SEO;
