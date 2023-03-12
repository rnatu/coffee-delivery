import { Button } from '../../../../components/Button';
import { CartItem } from './CartItem';
import { CartResume } from './CartResume';
import { CartCardContainer } from './styles';

export function CartCard() {
  return (
    <CartCardContainer>
      <CartItem />
      <div className="divider" />
      <CartItem />
      <div className="divider" />

      <CartResume />

      <Button text="Confirmar Pedido" />
    </CartCardContainer>
  );
}
