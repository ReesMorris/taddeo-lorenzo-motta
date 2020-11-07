import FocusTrap from 'focus-trap-react';
import React, { useEffect } from 'react';
import IGalleryItem from '../../types/gallery-item';
import Styles from './image-modal.styles';

interface ImageModalProps {
  item: IGalleryItem;
  onClose?: () => void;
}

const ImageModal: React.FunctionComponent<ImageModalProps> = ({
  item,
  onClose
}) => {
  const closeHandler = (): void => onClose && onClose();
  const onKeyPress: (e: KeyboardEvent) => void = (e: KeyboardEvent) =>
    (e.code === 'Escape' || e.keyCode === 27) && closeHandler();

  useEffect(() => {
    document.addEventListener('keydown', onKeyPress, false);
    () => document.removeEventListener('keydown', onKeyPress, false);
  }, []);

  return (
    <FocusTrap>
      <Styles.Modal
        role='dialog'
        aria-label='Image viewer'
        aria-modal='true'
        className='modal'
      >
        <Styles.Image src={item.image} alt={item.description} />
        <Styles.CloseButton
          aria-label='Close this modal'
          onClick={closeHandler}
        >
          <Styles.CloseButtonText>X</Styles.CloseButtonText>
        </Styles.CloseButton>
      </Styles.Modal>
    </FocusTrap>
  );
};

export default ImageModal;
