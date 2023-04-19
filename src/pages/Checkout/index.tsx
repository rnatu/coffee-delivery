/* eslint-disable no-unused-vars */
import { TitleText } from '../../components/Typography';
import {
  PaymentMethods,
  paymentMethodsData,
} from './components/PaymentMethods';
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
import { useNavigate } from 'react-router-dom';

enum PaymentMethodsEnum {
  credit = 'Cartão de crédito',
  debit = 'Cartão de débito',
  money = 'Dinheiro',
}

const checkoutFormValidationSchema = zod.object({
  // cep: zod.string().min(1, 'Informe o CEP'),
  // street: zod.string().min(1, 'Informe o nome da rua'),
  // number: zod
  //   .number({
  //     invalid_type_error: 'Insira um número válido',
  //   })
  //   .min(1, 'Informe o número'),
  // complement: zod.string(),
  // district: zod.string().min(1, 'Informe o Bairro'),
  // city: zod.string().min(1, 'Informe a Cidade'),
  // uf: zod.string().min(1, 'Informe o UF'),
  paymentMethod: zod.string({
    errorMap: () => {
      return {
        message: 'Informe o método de pagamento',
      };
    },
  }),
});

type checkoutFormData = zod.infer<typeof checkoutFormValidationSchema>;

export function Checkout() {
  const navigate = useNavigate();

  const checkoutForm = useForm<checkoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  });

  const { handleSubmit } = checkoutForm;

  function handleCheckout(data: checkoutFormData) {
    if (data) {
      navigate('/success');
    }
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
