import userEvent from '@testing-library/user-event';
import React from 'react';
import { render as rtlRender } from '../../utils/tests';
import GalleryItem from './index';

const defaultItem = {
  id: 1,
  name: 'test',
  description: 'desc',
  image: 'https://google.com'
};

const render = ({ item = defaultItem, onClick = null }) => {
  return {
    ...rtlRender(<GalleryItem item={item} onClick={onClick} />)
  };
};

test('renders correct item', () => {
  const item = {
    id: 1,
    name: 'Mona Lisa',
    description:
      'The Mona Lisa is an oil painting by Italian artist, inventor, and writer Leonardo da Vinci. Likely completed in 1506, the piece features a portrait of a seated woman set against an imaginary landscape.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
  };
  const { getByRole, getByText } = render({ item });

  const image = getByRole('img');
  expect(image).toHaveAttribute('src', item.image);
  expect(image).toHaveAttribute('alt', item.description);
  getByText(item.name);
});

test('`onClick` callback works', () => {
  const onClick = jest.fn();
  const { getByRole } = render({ onClick });

  expect(onClick).toHaveBeenCalledTimes(0);

  const button = getByRole('button');
  userEvent.click(button);

  expect(onClick).toHaveBeenCalledTimes(1);
});
