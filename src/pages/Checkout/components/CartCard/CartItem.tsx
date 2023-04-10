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
import { useCartContext } from '../../../../hooks/useCartContext';

interface CartItemProps {
  coffee: CoffeeType;
}

export function CartItem({ coffee }: CartItemProps) {
  const { removeFromCart, changeCartItemQuantity } = useCartContext();

  const formattedPrice = formatMoney(coffee.price * coffee.amount);

  function handleIncrease() {
    changeCartItemQuantity(coffee, 'increase');
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee, 'decrease');
  }

  function handleRemoveCoffee() {
    removeFromCart(coffee);
  }

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
            <QuantityInput
              size="small"
              amount={coffee.amount}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <RemoveCartButton type="button" onClick={handleRemoveCoffee}>
              <Trash size={16} />
              REMOVER
            </RemoveCartButton>
          </CartActionsContainer>
        </div>
      </div>

      <RegularText weight={700}>R$ {formattedPrice}</RegularText>
    </CartItemContainer>
  );
}
