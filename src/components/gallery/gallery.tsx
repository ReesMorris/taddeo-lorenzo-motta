import React from 'react';
import IGalleryItem from '../../types/gallery-item';
import GalleryItem from '../gallery-item/gallery-item';
import Styles from './gallery.styles';

interface GalleryProps {
  items: IGalleryItem[];
}

const Gallery: React.FunctionComponent<GalleryProps> = ({ items }) => {
  return (
    <Styles.Grid breakpointCols={5} className='grid' columnClassName='col'>
      {items.map(item => (
        <GalleryItem key={item.id} item={item} />
      ))}
    </Styles.Grid>
  );
};

export default Gallery;
