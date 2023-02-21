import expresso from '../../../../assets/coffee-images/expresso.svg';
import { QuantityInput } from '../../../../components/QuantityInput';

import { CardFooter, CoffeeCardContainer, CoffeeName } from './styles';

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={expresso} alt="Xícara de café expresso tradicional" />

      <span>{'Tradicional'.toUpperCase()}</span>

      <CoffeeName>Expresso Tradicional</CoffeeName>

      <p>O tradicional café feito com água quente e grãos moídos</p>

      <CardFooter>
        <div>
          <p>R$ 9,90</p>
        </div>

        <div>
          <QuantityInput />
        </div>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
