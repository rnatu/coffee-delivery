//! RETIRAR
/* eslint-disable no-unused-vars */
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
import { Navigate, useNavigate } from 'react-router-dom';

const checkoutFormValidationSchema = zod.object({
  cep: zod
    .string()
    .min(1, 'Informe o CEP')
    .regex(/^\d{5}(-?\d{3})?$/, { message: 'CEP inválido.' }),
  street: zod.string().min(1, 'Informe o nome da rua'),
  number: zod
    .number({
      invalid_type_error: 'Insira um número válido',
    })
    .min(1, 'Informe o número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod
    .string()
    .min(1, 'Informe o UF')
    .max(2, 'Só é permitido no máximo 2 digitos')
    .regex(/^[A-Za-z]+$/, { message: 'O campo deve conter apenas letras.' }),
  paymentMethod: zod.string({
    errorMap: () => {
      return {
        message: 'Informe o método de pagamento',
      };
    },
  }),
});

export type checkoutFormData = zod.infer<typeof checkoutFormValidationSchema>;

export function Checkout() {
  const navigate = useNavigate();

  const checkoutForm = useForm<checkoutFormData>({
    // resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      //! verify
      paymentMethod: undefined,
    },
  });

  const { handleSubmit } = checkoutForm;

  function handleCheckout(data: checkoutFormData) {
    if (data) {
      navigate('/success', {
        state: data,
      });
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
