import styled from 'styled-components';
import LinkWrapper from '../link-wrapper';
import UIImage from '../image';

const GridItem = styled.li`
  padding: 5rem;
  position: relative;
  transition: all 0.2s ease;

  &:nth-child(2n):hover {
    transform: scale(1.1) rotate(-5deg);
  }
  &:nth-child(2n-1):hover {
    transform: scale(1.1) rotate(5deg);
  }
`;

const Label = styled.p`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Link = styled(LinkWrapper)`
  display: block;
`;

const Image = styled(UIImage)``;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 900px) {
    ${GridItem} {
      padding: 2rem;
    }
  }
  @media (max-width: 770px) {
    grid-template-columns: 1fr 1fr;

    ${GridItem} {
      padding: 5rem;
    }
  }
  @media (max-width: 600px) {
    ${GridItem} {
      padding: 2rem;
    }
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;

    ${GridItem} {
      padding: 0rem;
    }
  }
`;

export default { Grid, GridItem, Label, Link, Image };
