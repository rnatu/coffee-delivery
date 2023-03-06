import { CartItem } from './CartItem';
import { CartCardContainer } from './styles';

export function CartCard() {
  return (
    <CartCardContainer>
      <CartItem />
      <div className="divider" />
      <CartItem />
      <div className="divider" />

      <button type="submit">Submit</button>
    </CartCardContainer>
  );
}
