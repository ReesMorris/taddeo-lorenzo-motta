import styled from 'styled-components';

const Text = styled.p`
  font-size: 1.6rem;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default { Text };
