import userEvent from '@testing-library/user-event';
import React from 'react';
import { render as rtlRender } from '../../utils/tests';
import Gallery from './index';

const defaultItems = [
  {
    id: 1,
    name: 'test',
    description: 'desc',
    image: 'https://google.com'
  },
  {
    id: 2,
    name: 'test 2',
    description: 'desc 2',
    image: 'https://google.co.uk'
  },
  {
    id: 3,
    name: 'test 3',
    description: 'desc 3',
    image: 'https://google.it'
  }
];

const render = ({ items = defaultItems } = {}) => {
  return {
    ...rtlRender(<Gallery items={items} />)
  };
};

test('renders all items', () => {
  const { getByText } = render();
  defaultItems.forEach(item => getByText(item.name));
});
