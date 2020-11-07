import { css } from 'styled-components';

export default css`
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    background: ${props => props.theme.site.background_color};
    color: ${props => props.theme.colors.primary};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
  }
`;
