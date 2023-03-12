import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 0.75rem 0.0625rem;
  width: 100%;
  border: none;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors['brand-yellow']};
  font-size: ${({ theme }) => theme.textSizes['components-button-g']};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`;
