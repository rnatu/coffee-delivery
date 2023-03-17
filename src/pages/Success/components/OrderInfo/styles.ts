import styled, { css } from 'styled-components';

export const OrderInfoContainer = styled.section`
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
