import { Button } from '../../../../components/Button';
import { useCartContext } from '../../../../hooks/useCartContext';
import { CartItem } from './CartItem';
import { CartResume } from './CartResume';
import { CartCardContainer } from './styles';

export function CartCard() {
  const { cartState } = useCartContext();

  return (
    <CartCardContainer>
      {cartState.coffees.map((coffee) => (
        <div key={coffee.id}>
          <CartItem coffee={coffee} />
          <div className="divider" />
        </div>
      ))}

      <CartResume />

      <Button text="Confirmar Pedido" />
    </CartCardContainer>
  );
}
