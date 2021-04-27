import React from 'react';
import { IHomepageData } from '../../models/homepage-data';
import Homepage from '../components/homepage';
import getData from '../utils/get-data';

interface IndexProps {
  data: IHomepageData[];
}

const Index = ({ data }: IndexProps) => <Homepage data={data} />;

export const getStaticProps = async () => {
  const data = await getData<IHomepageData>('homepage.csv');
  return { props: { data } };
};

export default Index;
