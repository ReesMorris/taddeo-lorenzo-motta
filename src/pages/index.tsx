import React from 'react';
import { IHomepageData } from '../../models/homepage-data';
import Homepage, { HomepageProps } from '../components/homepage';
import { getData } from '../utils/get-data';

const Index = ({ data }: HomepageProps) => <Homepage data={data} />;

export const getStaticProps = async () => {
  const data = await getData<IHomepageData>('homepage.csv');
  return { props: { data } };
};

export default Index;
