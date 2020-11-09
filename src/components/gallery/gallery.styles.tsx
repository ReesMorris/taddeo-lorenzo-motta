import styled from 'styled-components';
import Masonry from 'react-masonry-css';

const Grid = styled(Masonry)`
  display: flex;
  width: auto;

  > .col {
    padding-left: ${({ theme }) => theme.consts.gallery_item_spacing};
    background-clip: padding-box;
  }
`;

export default { Grid };
