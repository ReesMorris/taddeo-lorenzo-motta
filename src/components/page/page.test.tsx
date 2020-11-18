import React from 'react';
import { render as rtlRender } from '../../utils/tests';
import Page from './index';

const render = ({ title = '', children = <></> } = {}) => {
  return { ...rtlRender(<Page title={title}>{children}</Page>) };
};

test('renders children', () => {
  const children = <p>hello!</p>;
  const { getByText } = render({ children });
  getByText('hello!');
});
