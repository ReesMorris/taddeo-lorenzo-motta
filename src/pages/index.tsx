import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  color: ${props => props.theme.colors.primary};
`;

const Index: React.FunctionComponent = () => {
  return (
    <p>
      <Link href='#'>Taddeo Lorenzo Motta</Link>
    </p>
  );
};

export default Index;
