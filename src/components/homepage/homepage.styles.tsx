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

const Label = styled.p`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  padding: 2.5rem 0;
  text-transform: uppercase;
  text-align: center;
  font-size: 3rem;
  opacity: 0;
  transition: all 0.3s ease;
`;

const Link = styled(LinkWrapper)`
  &:hover ${Label} {
    opacity: 1;
  }
`;

const Image = styled(UIImage)``;

export default { Grid, GridItem, Label, Link, Image };
