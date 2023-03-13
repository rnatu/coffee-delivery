import styled from 'styled-components';

export const SuccessContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  > h1 {
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`;
