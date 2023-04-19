import { TitleText } from '../../components/Typography';
import { PaymentMethods } from './components/PaymentMethods';
import { AddressForm } from './components/AddressForm';
import {
  SelectedCoffees,
  CheckoutContainer,
  UserDataContainer,
} from './styles';
import { CartCard } from './components/CartCard';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const checkoutFormValidationSchema = zod.object({
  cep: zod
    .string({
      invalid_type_error: 'Insira um CEP válido',
    })
    .min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o nome da rua'),
  number: zod
    .number({
      invalid_type_error: 'Insira um número válido',
    })
    .min(1, 'Informe o número'),
  complement: zod.string(),
});

type checkoutFormData = zod.infer<typeof checkoutFormValidationSchema>;

export function Checkout() {
  const checkoutForm = useForm<checkoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {},
  });

  const { handleSubmit } = checkoutForm;

  function handleCheckout(data: checkoutFormData) {
    console.log(data);
  }

  return (
    <FormProvider {...checkoutForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleCheckout)}>
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
    </FormProvider>
  );
}
