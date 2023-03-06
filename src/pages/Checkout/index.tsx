import { TitleText } from '../../components/Typography';
import { PaymentMethods } from './components/PaymentMethods';
import { AddressForm } from './components/AddressForm';
import {
  SelectedCoffees,
  CheckoutContainer,
  UserDataContainer,
} from './styles';
import { CartCard } from './components/CartCard';

export function Checkout() {
  return (
    <CheckoutContainer
      onSubmit={(event) => {
        console.log('Submit form');
        event?.preventDefault();
      }}
    >
      <UserDataContainer>
        <TitleText size="xs" color="subtitle">
          Complete seu pedido
        </TitleText>

        <AddressForm />

        <PaymentMethods />
      </UserDataContainer>

      <SelectedCoffees>
        <TitleText size="xs" color="subtitle">
          Cafés selecionados
        </TitleText>

        <CartCard />
      </SelectedCoffees>
    </CheckoutContainer>
  );
}
