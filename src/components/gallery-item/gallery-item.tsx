import React from 'react';
import IGalleryItem from '../../types/gallery-item';
import Styles from './gallery-item.styles';

interface GalleryItemProps {
  item: IGalleryItem;
  onClick?: (item: IGalleryItem) => void;
}

const GalleryItem: React.FunctionComponent<GalleryItemProps> = ({
  item,
  onClick
}) => {
  const clickHander = (): void => onClick && onClick(item);

  return (
    <Styles.Item>
      <Styles.Wrapper onClick={clickHander}>
        <Styles.Figure>
          <Styles.Image src={item.image} alt={item.description} />
          <Styles.FigCaption>
            <Styles.FigCaptionText>{item.name}</Styles.FigCaptionText>
          </Styles.FigCaption>
        </Styles.Figure>
      </Styles.Wrapper>
    </Styles.Item>
  );
};

export default GalleryItem;
