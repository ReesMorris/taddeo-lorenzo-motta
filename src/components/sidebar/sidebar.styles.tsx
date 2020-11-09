import styled from 'styled-components';
import { devices } from '../../themes/_consts';

const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  padding: 3rem;
  width: ${({ theme }) => theme.consts.sidebar_width};
  overflow-y: auto;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media ${devices.tablet} {
    position: relative;
    width: 100%;
    background: ${({ theme }) => theme.site.background_color};
    display: flex;
    height: auto;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  line-height: 3rem;
  margin-bottom: 2rem;

  @media ${devices.tablet} {
    flex-grow: 1;
    margin: 0;
  }
`;

interface TitleSpanProps {
  size: 'small' | 'large';
}
const TitleSpan = styled.span<TitleSpanProps>`
  display: ${({ size }) => (size === 'large' ? 'block' : 'none')};

  @media ${devices.mobileL} {
    display: ${({ size }) => (size === 'small' ? 'block' : 'none')};
  }
`;

const NavItems = styled.ul`
  @media ${devices.tablet} {
    display: flex;
    line-height: 3rem;
  }
`;

const NavItem = styled.li`
  margin-bottom: 1.3rem;

  a:hover {
    text-decoration: underline;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media ${devices.tablet} {
    margin: 0;

    &:not(:first-child) {
      margin-left: 1rem;
    }
  }
`;

export default { Sidebar, Title, TitleSpan, NavItems, NavItem };
