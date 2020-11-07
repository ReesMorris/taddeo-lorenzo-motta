import styled from 'styled-components';

const Item = styled.div`
  list-style-type: none;
  margin-bottom: ${props => props.theme.consts.gallery_item_spacing};
`;

const Wrapper = styled.div`
  position: relative;
  display: block;
  padding: 5%;
  background: ${props => props.theme.gallery.item_border_color};
  cursor: pointer;

  &:hover figcaption {
    opacity: 1;
  }
`;

const Figure = styled.figure``;

const Image = styled.img`
  max-width: 100%;
  display: block;
`;

const FigCaption = styled.figcaption`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  transition: opacity 0.2s;
`;

const FigCaptionText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: ${props => props.theme.gallery.item_border_color};
  border-radius: 0.3rem;
  padding: 4%;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.secondary};
`;

export default { Item, Wrapper, Figure, Image, FigCaption, FigCaptionText };