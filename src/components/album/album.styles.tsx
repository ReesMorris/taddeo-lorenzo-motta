import styled from 'styled-components';
import UIImage from '../image';

const Album = styled.div``;

const ImageContainer = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0.2rem;
  margin: 0;
`;

const Image = styled(UIImage)`
  height: auto;
  background: #272727;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ViewMessage = styled.span``;

const ModalImage = styled(UIImage)`
  position: absolute;
  max-width: 80vw;
  max-height: 80vh;
  width: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default { Album, ImageContainer, Image, ViewMessage, ModalImage };
