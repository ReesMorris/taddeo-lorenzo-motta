import styled from 'styled-components';
import { devices } from '../../themes/_consts';

const Main = styled.main`
  margin-left: calc(
    100% - (100vw - ${({ theme }) => theme.consts.sidebar_width} - 1rem)
  );
  width: 100%;

  @media ${devices.tablet} {
    margin-left: 0;
  }
`;

export default { Main };
