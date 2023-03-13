import styled, { css } from 'styled-components';

export const SuccessContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  > h1 {
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  > div {
    display: flex;
    gap: 6.375rem;
  }
`;

export const OrderInfo = styled.section`
  flex: 1;
  border-width: 4px;
  border-style: solid;
  border-image: ${({ theme }) => css`
  linear-gradient(to bottom right, ${theme.colors['brand-yellow-dark']}, ${theme.colors['brand-purple']}) 1;
  `};
`;
