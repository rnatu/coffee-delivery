import styled from 'styled-components';
import { RegularText, TitleText } from '../../../../components/Typography';

export const CoffeeListContainer = styled.div`
  margin: 3.375rem 0;

  display: flex;

  flex-wrap: wrap;
  column-gap: 1.6rem;
  row-gap: 2.5rem;
`;

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 16rem;
  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 36px 6px 36px;

  > img {
    height: 7.5rem;
    margin-top: -1.25rem;
  }

  > span {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    margin-top: 0.75rem;

    background-color: ${(props) => props.theme.colors['brand-yellow-light']};
    color: ${(props) => props.theme.colors['brand-yellow-dark']};
    font-weight: 700;
    font-size: 0.625rem;
  }
`;

export const CoffeeName = styled(TitleText).attrs({
  size: 's',
  color: 'subtitle',
  weight: 700,
})`
  margin-top: 1rem;
`;

export const CoffeeDescription = styled(RegularText).attrs({
  color: 'label',
  size: 's',
})`
  margin: 0.5rem 1.25rem;
  text-align: center;
`;

export const CardFooter = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  margin: 2.0625rem 0 1.4688rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > div:first-child {
    display: flex;
    align-items: baseline;
    gap: 0.1875rem;
  }
`;

export const AddCartWrapper = styled.div`
  width: 7.5rem;
  display: flex;
  gap: 0.5rem;

  > button {
    display: flex;
    border: none;
    padding: 0.5rem;

    background-color: ${({ theme }) => theme.colors['brand-purple-dark']};
    color: ${({ theme }) => theme.colors['base-card']};
    padding: 0.5rem;
    border-radius: 6px;

    &:hover {
      background: ${({ theme }) => theme.colors['brand-purple']};
    }
  }
`;
