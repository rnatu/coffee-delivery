import { TitleText } from '../../components/Typography';
import { PaymentMethods } from './components/PaymentMethods';
import { AddressForm } from './components/AddressForm';
import { CheckoutContainer } from './styles';
import { CoffeeCartCard } from './components/CoffeeCartCard';

export function Checkout() {
  return (
    <CheckoutContainer
      onSubmit={(event) => {
        console.log('Submit form');
        event?.preventDefault();
      }}
    >
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

        <CoffeeCartCard />
      </div>
    </CheckoutContainer>
  );
}
