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

    background-color: ${(props) => props.theme.colors['yellow-light']};
    color: ${(props) => props.theme.colors['yellow-dark']};
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
  margin: 33px 0 1.4688rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: baseline;
    gap: 3px;
  }
`;
