import styled from 'styled-components';
import { TitleText } from '../../../../components/Typography';

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

  img {
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

  /* h1 {
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-family: ${(props) => props.theme.fonts.title};

    margin-top: 16px;
  } */

  > p {
    text-align: center;
    color: ${(props) => props.theme.colors['base-label']};
  }
`;

export const CoffeeName = styled(TitleText).attrs({
  size: 's',
  color: 'subtitle',
  weight: 700,
})`
  margin-top: 1rem;
`;

export const CardFooter = styled.div``;
