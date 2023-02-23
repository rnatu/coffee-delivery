import { ShoppingCartSimple } from 'phosphor-react';
import expresso from '../../../../assets/coffee-images/expresso.svg';
import { QuantityInput } from '../../../../components/QuantityInput';
import { RegularText, TitleText } from '../../../../components/Typography';

import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  CoffeeDescription,
  CoffeeName,
} from './styles';

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={expresso} alt="Xícara de café expresso tradicional" />

      <span>{'Tradicional'.toUpperCase()}</span>

      <CoffeeName>Expresso Tradicional</CoffeeName>

      <CoffeeDescription>
        O tradicional café feito com água quente e grãos moídos
      </CoffeeDescription>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText color="text" as="strong">
            9,90
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput />

          <button>
            <ShoppingCartSimple weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
