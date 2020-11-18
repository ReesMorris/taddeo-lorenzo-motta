import React from 'react';
import { render as rtlRender } from '../../utils/tests';
import ThemeWrapper from './theme-wrapper';

const render = ({ children }) => {
  return { ...rtlRender(<ThemeWrapper>{children}</ThemeWrapper>) };
};

test('returns children', () => {
  const children = <p>hello!</p>;
  const { getByText } = render({ children });

  getByText('hello!');
});
