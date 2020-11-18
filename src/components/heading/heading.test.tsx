import React from 'react';
import Heading from './index';
import { render as rtlRender } from '../../utils/tests';

const render = ({ as = null, children }) => {
  return {
    ...rtlRender(
      <Heading as={as}>
        <>{children}</>
      </Heading>
    )
  };
};

test('renders children', () => {
  const children = 'hello!';
  const { getByText } = render({ children });
  getByText(children);
});

test('renders a `h1` tag by default', () => {
  const children = 'Hello';
  const { getByText } = render({ children });
  expect(getByText(children)).toContainHTML('<h1');
});

test('`as` prop works', () => {
  const children = 'Hello';
  const { getByText, queryByText } = render({ as: 'h2', children });
  expect(getByText(children)).toContainHTML('<h2');
  expect(queryByText(children)).not.toContainHTML('<h1');
});
