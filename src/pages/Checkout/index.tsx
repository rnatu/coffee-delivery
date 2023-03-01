import { TitleText } from '../../components/Typography';
import { PaymentMethods } from './components/PaymentMethods';
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

        <PaymentMethods />
      </div>
      <div>
        <TitleText size="xs" color="subtitle">
          Cafés selecionados
        </TitleText>
      </div>
    </CheckoutContainer>
  );
}
