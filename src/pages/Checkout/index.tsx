import { TitleText } from '../../components/Typography';
import { BillingOptions } from './components/BillingOptions';
import { AddressForm } from './components/AddressForm';
import { CheckoutContainer } from './styles';

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <TitleText size="xs" color="subtitle">
          Complete seu pedido
        </TitleText>

        <AddressForm />

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
