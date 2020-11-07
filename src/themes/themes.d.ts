import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    consts: {
      sidebar_width: string;
      gallery_item_spacing: string;
    };
    site: {
      background_color: string;
    };
    colors: {
      primary: string;
      secondary: string;
    };
    gallery: {
      item_border_color: string;
    };
  }
}
