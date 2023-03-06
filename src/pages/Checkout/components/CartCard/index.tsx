import { CartItem } from './CartItem';
import { CartCardContainer } from './styles';

export function CartCard() {
  return (
    <CartCardContainer>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <button type="submit">Submit</button>
    </CartCardContainer>
  );
}
