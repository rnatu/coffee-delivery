import { Trash } from 'phosphor-react';
import { QuantityInput } from '../../../../components/QuantityInput';
import { RegularText } from '../../../../components/Typography';
import { CoffeeType } from '../../../../data/coffees';
import {
  CartActionsContainer,
  CartItemContainer,
  RemoveCartButton,
} from './styles';
import formatMoney from '../../../../utils/formatMoney';

interface CartItemProps {
  coffee: CoffeeType;
}

export function CartItem({ coffee }: CartItemProps) {
  return (
    <CartItemContainer>
      <div>
        <img
          src={`/coffees/${coffee.photo}`}
          alt={`Xícara de ${coffee.name} - ${coffee.description}`}
        />

        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>

          <CartActionsContainer>
            <QuantityInput size="small" />
            <RemoveCartButton>
              <Trash size={16} />
              REMOVER
            </RemoveCartButton>
          </CartActionsContainer>
        </div>
      </div>

      <RegularText weight={700}>R$ {formatMoney(coffee.price)}</RegularText>
    </CartItemContainer>
  );
}
