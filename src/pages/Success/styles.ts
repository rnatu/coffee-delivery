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

  //border radius with gradient
  border: 1px double transparent;
  border-radius: 6px 36px;
  background-image: ${({ theme }) => css`
  linear-gradient(white, white),
  linear-gradient(to right, ${theme.colors['brand-yellow-dark']}, ${theme.colors['brand-purple']})
  `};
  background-origin: border-box;
  background-clip: content-box, border-box;
`;
