import styled from 'styled-components';
import LinkWrapper from '../link-wrapper';
import UIHeading from '../heading';

const Page = styled.main`
  padding: 5rem;
`;

const Content = styled.div`
  min-height: 50vh;
`;

const Return = styled.div`
  margin-top: 3rem;
`;

const ReturnLink = styled(LinkWrapper)`
  display: inline-block;
`;

const ReturnText = styled(UIHeading)``;

export default { Page, Content, Return, ReturnLink, ReturnText };
