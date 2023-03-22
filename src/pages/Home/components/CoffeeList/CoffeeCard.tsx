import { ShoppingCartSimple } from 'phosphor-react';

import { QuantityInput } from '../../../../components/QuantityInput';
import { RegularText, TitleText } from '../../../../components/Typography';
import { Coffee } from '../../../../data/coffees';
import { formatMoney } from '../../../../utils/formatMoney';

import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  CoffeeDescription,
  CoffeeName,
  CoffeeTagsContainer,
} from './styles';

interface CoffeeCardProps extends Coffee {}

export function CoffeeCard({
  photo,
  tags,
  name,
  description,
  price,
}: CoffeeCardProps) {
  const formattedPrice = formatMoney(price);

  return (
    <CoffeeCardContainer>
      <img
        src={`/coffees/${photo}`}
        alt="Xícara de café expresso tradicional"
      />

      <CoffeeTagsContainer>
        {tags.map((tag) => (
          <span key={tag}>{tag.toUpperCase()}</span>
        ))}
      </CoffeeTagsContainer>

      <CoffeeName>{name}</CoffeeName>

      <CoffeeDescription>{description}</CoffeeDescription>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText color="text" as="strong">
            {formattedPrice}
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
