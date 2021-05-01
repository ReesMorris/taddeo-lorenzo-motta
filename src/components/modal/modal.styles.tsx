import styled from 'styled-components';

const Modal = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  padding: 1rem;
  background: transparent;
  border: none;
  font-size: 3rem;
  opacity: 0.5;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

export default { Modal, CloseButton };
