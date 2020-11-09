import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90%;
  max-width: 90%;
  z-index: 2;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border: transparent;
  z-index: 1;
  cursor: default;

  &:focus {
    outline: none;

    span {
      outline: initial;
    }
  }
`;

const CloseButtonText = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  opacity: 0.6;
  transition: opacity 0.2s ease;
  font-weight: 600;
  cursor: pointer;
  font-size: 3rem;
  color: #ffffff;
  padding: 2rem;

  &:hover {
    opacity: 1;
  }
`;

export default { Modal, Image, CloseButton, CloseButtonText };
