import { CartItem } from './CartItem';
import { CartCardContainer } from './styles';

export function CoffeeCartCard() {
  return (
    <CartCardContainer>
      <h1>CoffeeCart</h1>

      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <button type="submit">Submit</button>
    </CartCardContainer>
  );
}
