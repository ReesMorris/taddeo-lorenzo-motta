import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    site: {
      background_color: string;
    };
    colors: {
      primary: string;
    };
    gallery: {
      item_border_color: string;
    };
  }
}
