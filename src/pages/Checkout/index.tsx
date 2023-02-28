import { TitleText } from '../../components/Typography';
import { BillingOptions } from './BillingOptions';
import { DeliveryDataForm } from './DeliveryDataForm';
import { CheckoutContainer } from './styles';

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <TitleText size="xs" color="subtitle">
          Complete seu pedido
        </TitleText>

        <DeliveryDataForm />

        <BillingOptions />
      </div>
      <div>
        <TitleText size="xs" color="subtitle">
          Cafés selecionados
        </TitleText>
      </div>
    </CheckoutContainer>
  );
}
