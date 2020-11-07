import styled from 'styled-components';

const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  padding: 3rem;
  width: ${props => props.theme.consts.sidebar_width};
  overflow-y: auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  line-height: 3rem;
  margin-bottom: 2rem;
`;

const NavItem = styled.li`
  margin-bottom: 1.3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default { Sidebar, Title, NavItem };
