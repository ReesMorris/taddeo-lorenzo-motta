import React from 'react';
import { render as rtlRender } from '../../utils/tests';
import ProgressBar from './index';
import nprogress from 'nprogress';
import { Router } from 'next/router';

jest.mock('nprogress', () => ({
  start: jest.fn(),
  done: jest.fn()
}));

const render = () => {
  return { ...rtlRender(<ProgressBar />) };
};

test('calls `NProgress.start()` correctly', () => {
  render();
  Router.events.emit('routeChangeStart');
  expect(nprogress.start).toHaveBeenCalledTimes(1);
});

test('calls `NProgress.done()` correctly', () => {
  render();
  Router.events.emit('routeChangeComplete');
  expect(nprogress.done).toHaveBeenCalledTimes(2);
});

test('calls `NProgress.done()` correctly', () => {
  render();
  Router.events.emit('routeChangeError');
  expect(nprogress.done).toHaveBeenCalledTimes(3);
});
