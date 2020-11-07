import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    consts: {
      sidebar_width: string;
    };
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
