import { ShoppingCartSimple } from 'phosphor-react';
import { useState } from 'react';

import { QuantityInput } from '../../../../components/QuantityInput';
import { RegularText, TitleText } from '../../../../components/Typography';
import { CoffeeType } from '../../../../data/coffees';
import { useCartContext } from '../../../../hooks/useCartContext';
import formatMoney from '../../../../utils/formatMoney';

import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  CoffeeDescription,
  CoffeeName,
  CoffeeTagsContainer,
} from './styles';

interface CoffeeCardProps extends CoffeeType {}

export function CoffeeCard(coffee: CoffeeCardProps) {
  const { addOnCart } = useCartContext();
  const [amount, setAmount] = useState(1);

  const formattedPrice = formatMoney(coffee.price);

  function handleIncrease() {
    setAmount((oldState) => oldState + 1);
  }

  function handleDecrease() {
    if (amount === 1) return;
    setAmount((oldState) => oldState - 1);
  }

  function handleAddCoffee() {
    addOnCart({ ...coffee, amount });
    setAmount(1);
  }

  return (
    <CoffeeCardContainer>
      <img
        src={`/coffees/${coffee.photo}`}
        alt="Xícara de café expresso tradicional"
      />

      <CoffeeTagsContainer>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag.toUpperCase()}</span>
        ))}
      </CoffeeTagsContainer>

      <CoffeeName>{coffee.name}</CoffeeName>

      <CoffeeDescription>{coffee.description}</CoffeeDescription>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput
            amount={amount}
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
          />

          <button onClick={handleAddCoffee}>
            <ShoppingCartSimple weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
