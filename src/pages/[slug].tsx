import React from 'react';
import { ICustomPage } from '../../models/custom-page';
import Heading from '../components/heading';
import Page from '../components/page';
import { getData } from '../utils/get-data';

interface CustomPage {
  data: ICustomPage;
}

const CustomPage = ({ data }: CustomPage) => (
  <Page seo={{ title: data.title }}>
    <Heading>{data.title}</Heading>
    {data.text}
  </Page>
);

export const getStaticPaths = async () => {
  const pages = await getData<ICustomPage>('/pages.csv');

  return {
    paths: pages.map(page => page.path),
    fallback: false
  };
};

export const getStaticProps = async ctx => {
  const { slug } = ctx.params;

  const pages = await getData<ICustomPage>('/pages.csv');
  const [data] = pages.filter(page => page.path === `/${slug}`);

  return { props: { title: slug, data } };
};

export default CustomPage;
