import styled from 'styled-components';

export const OrderInfoContainer = styled.section`
  padding: 2.5rem;
  min-width: 32rem;
  background-color: ${({ theme }) => theme.colors.background};

  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  > div + div {
    margin-top: 32px;
  }

  > div {
    max-width: 22.125rem;
  }

  // border radius with gradient
  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors['brand-yellow-dark']},
      ${({ theme }) => theme.colors['brand-purple']}
    );
  }
`;
