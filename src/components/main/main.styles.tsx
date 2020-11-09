import styled from 'styled-components';
import { devices } from '../../themes/_consts';

interface MainProps {
  noPadding?: boolean;
}

const Main = styled.main<MainProps>`
  margin-left: calc(
    100% - (100vw - ${({ theme }) => theme.consts.sidebar_width} - 1rem)
  );
  padding: ${({ noPadding }) => (noPadding ? '0' : '5rem')};
  width: 100%;

  @media ${devices.tablet} {
    margin-left: 0;
  }
`;

export default { Main };
