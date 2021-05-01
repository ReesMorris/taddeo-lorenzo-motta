import styled from 'styled-components';
import LinkWrapper from '../link-wrapper';
import UIImage from '../image';

const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const GridItem = styled.li`
  padding: 5rem;
  position: relative;
`;

const Label = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  padding: 1rem 0;
  opacity: 0;
  transition: all 0.3s ease;
`;

const LabelText = styled.span`
  display: block;
  margin: 0 auto;
  line-height: 4rem;
  text-transform: uppercase;
  text-align: center;
  font-size: 3rem;
  max-width: 80%;
`;

const Link = styled(LinkWrapper)`
  display: block;

  &:hover ${Label}, &:focus ${Label} {
    opacity: 1;
  }
`;

const Image = styled(UIImage)``;

export default { Grid, GridItem, Label, LabelText, Link, Image };
