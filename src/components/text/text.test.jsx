import Text from './index';
import { render as rtlRender } from '../../utils/tests';

const render = ({ as, children = <></> }) => {
  return { ...rtlRender(<Text as={as}>{children}</Text>) };
};

test('renders children', () => {
  const children = 'hello!';
  const { getByText } = render({ children });
  getByText(children);
});

test('renders a `p` tag by default', () => {
  const children = 'Hello';
  const { getByText } = render({ children });
  expect(getByText(children)).toContainHTML('<p');
});

test('`as` prop works', () => {
  const children = 'Hello';
  const { getByText, queryByText } = render({ as: 'span', children });
  expect(getByText(children)).toContainHTML('<span');
  expect(queryByText(children)).not.toContainHTML('<p');
});
