import styled from 'styled-components';
import UIMasonry from 'react-masonry-css';

const Masonry = styled(UIMasonry)`
  & {
    display: flex;
    margin-left: -3rem;
    width: auto;
  }

  .col {
    padding-left: 3rem;
    background-clip: padding-box;
  }

  .item {
    margin-bottom: 3rem;
  }
`;

export default { Masonry };
