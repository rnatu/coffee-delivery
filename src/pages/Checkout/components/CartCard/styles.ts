import styled from 'styled-components';
import { SectionBaseStyle } from '../../styles';

export const CartCardContainer = styled(SectionBaseStyle)`
  width: 100%;
  margin-top: 0.9375rem;
`;

// CartCard
export const CartItemContainer = styled.div`
  padding: 0.5rem 0.25rem;
  width: 100%;

  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    gap: 1.25rem;

    img {
      width: 4rem;
    }
  }
`;

export const CartActionsContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
  height: 2rem;

  > div {
    max-width: 4.5rem;
  }
`;

export const RemoveCartButton = styled.button.attrs({
  type: 'button',
})`
  font-size: ${({ theme }) => theme.textSizes['components-button-s']};

  display: flex;
  align-items: center;
  gap: 0.25rem;

  background-color: ${({ theme }) => theme.colors['base-button']};
  border: none;
  border-radius: 6px;
  padding: 0.4063rem 0.5rem;

  svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};

    svg {
      color: ${({ theme }) => theme.colors['brand-purple-dark']};
    }
  }
`;
