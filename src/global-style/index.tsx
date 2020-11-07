import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import global from './global';
import nprogress from './nprogress';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${global}
  ${nprogress}
`;

export default GlobalStyle;
