import React from 'react';
import Album, { AlbumProps } from '../../components/album';
import { IAlbumData } from '../../../models/album-data';
import { getData, getFiles } from '../../utils/get-data';

const AlbumPage = ({ title, data }: AlbumProps) => (
  <Album title={title} data={data} />
);

export const getStaticPaths = () => {
  return {
    paths: getFiles('/albums').map(file => `/album/${file.split('.')[0]}`),
    fallback: false
  };
};

export const getStaticProps = async ctx => {
  const { slug } = ctx.params;
  const data = await getData<IAlbumData>(`/albums/${slug}.csv`);

  return { props: { title: slug, data } };
};

export default AlbumPage;
