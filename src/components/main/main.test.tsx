import React from 'react';
import { render as rtlRender } from '../../utils/tests';
import Main from './index';

const render = ({ children = <></> }) => {
  return { ...rtlRender(<Main>{children}</Main>) };
};

test('renders children', () => {
  const children = <p>hello!</p>;
  const { getByText } = render({ children });
  getByText('hello!');
});
