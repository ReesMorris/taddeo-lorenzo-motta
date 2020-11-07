import styled from 'styled-components';

const Main = styled.main`
  margin-left: calc(
    100% - (100vw - ${props => props.theme.consts.sidebar_width} - 1rem)
  );
  width: 100%;
`;

export default { Main };
