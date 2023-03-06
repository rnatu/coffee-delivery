import { Trash } from 'phosphor-react';
import { QuantityInput } from '../../../../components/QuantityInput';
import { RegularText } from '../../../../components/Typography';
import {
  CartActionsContainer,
  CartItemContainer,
  RemoveCartButton,
} from './styles';

export function CartItem() {
  return (
    <CartItemContainer>
      <div>
        <img
          src={`/coffees/expresso.svg`}
          alt="O tradicional café feito com água quente e grãos moídos"
        />

        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>

          <CartActionsContainer>
            <QuantityInput size="small" />
            <RemoveCartButton>
              <Trash size={16} />
              REMOVER
            </RemoveCartButton>
          </CartActionsContainer>
        </div>
      </div>

      <RegularText weight={700}>R$ 9,90</RegularText>
    </CartItemContainer>
  );
}
