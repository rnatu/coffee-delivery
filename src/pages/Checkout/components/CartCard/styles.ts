import styled from 'styled-components';
import { SectionBaseStyle } from '../../styles';

export const CartCardContainer = styled(SectionBaseStyle)`
  width: 448px;
  border: 1px solid red;
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
`;

export const RemoveCartButton = styled.button`
  font-size: ${({ theme }) => theme.textSizes['components-button-s']};

  display: flex;
  align-items: center;
  gap: 0.25rem;

  background-color: ${({ theme }) => theme.colors['base-button']};
  border: none;
  border-radius: 6px;
  padding: 0.4063rem 0.5rem;
`;
