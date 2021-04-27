import reset from './reset';
import global from './global';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 ${reset}
 ${global}
`;

export default GlobalStyle;
