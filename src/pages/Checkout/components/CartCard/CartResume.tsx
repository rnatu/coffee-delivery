import { RegularText } from '../../../../components/Typography';
import { useCartContext } from '../../../../hooks/useCartContext';
import formatMoney from '../../../../utils/formatMoney';
import { CartResumeContainer } from './styles';

export function CartResume() {
  const { cartState } = useCartContext();

  return (
    <CartResumeContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formatMoney(cartState.total)}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ 3,50</RegularText>
      </div>
      <div>
        <RegularText size="l" weight="700" color="subtitle">
          Total
        </RegularText>
        <RegularText size="l" weight="700" color="subtitle">
          R$ 29,70
        </RegularText>
      </div>
    </CartResumeContainer>
  );
}
