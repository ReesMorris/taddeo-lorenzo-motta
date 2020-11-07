import fs from 'fs';
import path from 'path';
import React from 'react';
import { GetStaticProps } from 'next';
import Main from '../components/main';
import Page from '../components/page';
import Sidebar from '../components/sidebar';
import Gallery from '../components/gallery';
import IGalleryItem from '../types/gallery-item';

interface IndexProps {
  galleryItems: IGalleryItem[];
}

const Index: React.FunctionComponent<IndexProps> = ({ galleryItems }) => {
  return (
    <Page>
      <Sidebar />
      <Main>
        <Gallery items={galleryItems} />
      </Main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const contents = await fs.readFileSync(
    path.join(process.cwd(), 'src/_test.txt'),
    'utf8'
  );

  const regexp = /:(.*)/;
  const items = contents.split('\n\n');
  const galleryItems = items.map((item, i) => {
    const lines = item.split('\n');
    return {
      id: i,
      name: lines[0].match(regexp)[1].trim(),
      desc: lines[1].match(regexp)[1].trim(),
      image: lines[2].match(regexp)[1].trim()
    };
  });

  return { props: { galleryItems } };
};

export default Index;
