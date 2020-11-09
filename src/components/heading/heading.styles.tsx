import styled, { css } from 'styled-components';

interface HeadingProps {
  design: string;
}

const Heading = styled.h1<HeadingProps>`
  ${({ design }) =>
    design === 'h1' &&
    css`
      font-size: 2.5rem;
      margin-bottom: 2rem;
      font-weight: 600;
    `}
`;

export default { Heading };
