import React from 'react';
import { render as rtlRender } from '../../utils/tests';
import userEvent from '@testing-library/user-event';
import ImageModal from './index';
import { fireEvent } from '@testing-library/dom';

const defaultItem = {
  id: 1,
  name: 'test',
  description: 'desc',
  image: 'https://google.com'
};

const render = ({ item = defaultItem, onClose = null }) => {
  return {
    ...rtlRender(<ImageModal item={item} onClose={onClose} />)
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
  const { getByRole } = render({ item });

  const image = getByRole('img');
  expect(image).toHaveAttribute('src', item.image);
  expect(image).toHaveAttribute('alt', item.description);
});

test('clicking close button calls `onClose` handler', () => {
  const onClose = jest.fn();
  const { getByRole } = render({ onClose });

  expect(onClose).toHaveBeenCalledTimes(0);

  const closeButton = getByRole('button');
  userEvent.click(closeButton);

  expect(onClose).toHaveBeenCalledTimes(1);
});

test('pressing `esc` calls onClose handler', () => {
  const onClose = jest.fn();
  const { getByRole } = render({ onClose });

  fireEvent.keyDown(document.body, { key: 'Escape', code: 'Escape' });
  expect(onClose).toHaveBeenCalledTimes(1);
});
