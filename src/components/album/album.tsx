import React, { useEffect, useState } from 'react';
import { IAlbumData } from '../../../models/album-data';
import getImagePath from '../../utils/get-image-path';
import Heading from '../heading';
import Masonry from '../masonry';
import Modal from '../modal';
import Page from '../page';
import Styles from './album.styles';

export interface AlbumProps {
  title: string;
  data: IAlbumData[];
}

const Album = ({ title, data }: AlbumProps) => {
  const [modalData, setModalData] = useState({ open: false, index: 0 });

  const onItemClick = index => {
    setModalData({ ...modalData, open: true, index });
  };
  const closeModal = () => {
    setModalData({ ...modalData, open: false });
  };

  const onKeyPress = (key: KeyboardEvent) => {
    if (modalData.open) {
      if (key.code === 'ArrowLeft') {
        setModalData({
          ...modalData,
          index: (modalData.index - 1 + data.length) % data.length
        });
      }
      if (key.code === 'ArrowRight') {
        setModalData({
          ...modalData,
          index: (modalData.index + 1) % data.length
        });
      }
      if (key.code === 'Escape') closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyPress);
    return () => window.removeEventListener('keydown', onKeyPress);
  }, [modalData]);

  return (
    <Page seo={{ title: title.replace(/-/g, '') }}>
      <Styles.Album>
        <Heading>{title.replace(/-/g, '')}</Heading>
        <Masonry>
          {data.map((item, index) => (
            <Styles.ImageContainer
              type='button'
              className='item'
              key={item.name}
              onClick={() => onItemClick(index)}
            >
              <Styles.Image
                src={`${getImagePath(item.image)}`}
                alt={item.name}
              />
              <Styles.ViewMessage className='visually-hidden'>
                View {item.name}
              </Styles.ViewMessage>
            </Styles.ImageContainer>
          ))}
        </Masonry>
      </Styles.Album>

      <Modal isOpen={modalData.open} onClose={closeModal}>
        <Styles.ModalImage
          src={`${getImagePath(data[modalData.index].image)}`}
          alt={data[modalData.index].name}
        />
      </Modal>
    </Page>
  );
};

export default Album;
