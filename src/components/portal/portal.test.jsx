import React from 'react';
import { render as rtlRender } from '../../utils/tests';
import Portal from './index';

const render = ({ isOpen, children }) => {
  return { ...rtlRender(<Portal isOpen={isOpen}>{children}</Portal>) };
};

test('clones children into the root DOM', () => {
  const children = (
    <div id='test'>
      <p>child</p>
    </div>
  );
  render({ isOpen: true, children });
  expect(document.querySelector('#test')).toContainHTML('<p>child</p>');
});

test('does not render if `isOpen` is false', () => {
  const children = (
    <div id='test'>
      <p>child</p>
    </div>
  );
  render({ isOpen: false, children });
  expect(document.querySelector('#test')).toBeFalsy();
});
