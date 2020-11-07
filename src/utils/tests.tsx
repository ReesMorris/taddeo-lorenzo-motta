import React from 'react';
import { render as rtlRender, RenderResult } from '@testing-library/react';

// Custom render function allows us to (eventually) wrap our own
// components or contexts around what is returned - such as Redux or
// Styled Components, should we need them
export const render = (ui: React.ReactElement): RenderResult => {
  return {
    ...rtlRender(ui)
  };
};