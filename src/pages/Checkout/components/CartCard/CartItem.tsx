import { Trash } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { QuantityInput } from '../../../../components/QuantityInput';
import { RegularText } from '../../../../components/Typography';
import {
  CartActionsContainer,
  CartItemContainer,
  RemoveCartButton,
} from './styles';

export function CartItem() {
  const { colors } = useTheme();

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
              <Trash color={colors['brand-purple']} /> Remover
            </RemoveCartButton>
          </CartActionsContainer>
        </div>
      </div>

      <RegularText weight="bold">R$ 9,90</RegularText>
    </CartItemContainer>
  );
}
