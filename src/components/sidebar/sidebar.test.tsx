import React from 'react';
import { render as rtlRender } from '../../utils/tests';
import Sidebar from './sidebar';

const fakePages = {
  home: '/customHome',
  about: '/customAbout',
  contact: '/custom-contact'
};
jest.mock('../../themes/_consts', () => ({
  ...jest.requireActual('../../themes/_consts'),
  pages: fakePages
}));

const render = () => {
  return { ...rtlRender(<Sidebar />) };
};

test('renders correct links', () => {
  const { getByText } = render();

  const home = getByText(/Taddeo Lorenzo Motta/i);
  expect(home).toHaveAttribute('href', fakePages.home);

  const about = getByText(/About/i);
  expect(about).toHaveAttribute('href', fakePages.about);

  const contact = getByText(/Contact/i);
  expect(contact).toHaveAttribute('href', fakePages.contact);
});
