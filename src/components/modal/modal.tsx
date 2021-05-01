import React, { useRef } from 'react';
import useOutsideClick from '../../hooks/use-outside-click';
import Styles from './modal.styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const ref = useRef();
  useOutsideClick(ref, () => {
    isOpen && onClose();
  });

  if (!isOpen) return null;
  return (
    <Styles.Modal>
      <Styles.CloseButton onClick={onClose} aria-label='Close' title='Close'>
        x
      </Styles.CloseButton>
      <div ref={ref}>{children}</div>
    </Styles.Modal>
  );
};

export default Modal;
