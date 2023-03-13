import styled, { css } from 'styled-components';

export interface QuantityInputContainerProps {
  size: 'medium' | 'small';
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  input {
    width: 100%;
    text-align: center;

    background: none;
    border: none;
    color: ${({ theme }) => theme.colors['base-title']};

    &:focus {
      outline: 0;
      box-shadow: none;
    }
  }

  ${({ size }) =>
    size === 'medium' &&
    css`
      padding: 0.5313rem 0.5rem;
    `}

  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 0.3438rem 0.5rem;
    `}
`;

export const IconWrapper = styled.button.attrs({
  type: 'button',
})`
  width: 0.875rem;
  height: 0.875rem;

  background: none;
  border: none;

  display: flex;

  color: ${({ theme }) => theme.colors['brand-purple']};

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors['brand-purple-dark']};
  }
`;
