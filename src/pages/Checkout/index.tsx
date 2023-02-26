import { TitleText } from '../../components/Typography';
import { CheckoutContainer } from './styles';

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <TitleText size="xs" color="subtitle">
          Complete seu pedido
        </TitleText>

        <div>Pagamento</div>
      </div>
      <div>
        <TitleText size="xs" color="subtitle">
          Cafés selecionados
        </TitleText>
      </div>
    </CheckoutContainer>
  );
}
