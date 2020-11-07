import React, { useState } from 'react';
import IGalleryItem from '../../types/gallery-item';
import GalleryItem from '../gallery-item/gallery-item';
import ImageModal from '../image-modal';
import Portal from '../portal';
import Styles from './gallery.styles';

interface GalleryProps {
  items: IGalleryItem[];
}

const Gallery: React.FunctionComponent<GalleryProps> = ({ items }) => {
  const [modalItem, setModalItem] = useState<IGalleryItem | null>(null);

  const clickHandler = (item: IGalleryItem): void =>
    setModalItem(modalItem === item ? null : item);

  return (
    <>
      <Styles.Grid breakpointCols={5} className='grid' columnClassName='col'>
        {items.map(item => (
          <GalleryItem key={item.id} item={item} onClick={clickHandler} />
        ))}
      </Styles.Grid>

      <Portal isOpen={!!modalItem}>
        <ImageModal item={modalItem} onClose={() => setModalItem(null)} />
      </Portal>
    </>
  );
};

export default Gallery;
