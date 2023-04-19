import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { SectionTitle } from '../SectionTitle';
import { PaymentMethodInput } from './PaymentMethodInput';
import { PaymentMethodOptions, PaymentMethodsContainer } from './styles';
import { useFormContext } from 'react-hook-form';
import { RegularText } from '../../../../components/Typography';

export const paymentMethodsData = {
  credit: {
    label: 'Cartão de crédito',
    icon: CreditCard,
  },
  debit: {
    label: 'Cartão de débito',
    icon: Bank,
  },
  money: {
    label: 'Dinheiro',
    icon: Money,
  },
};

export function PaymentMethods() {
  const { colors } = useTheme();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod?.message as string;

  console.log(Object.entries(paymentMethodsData));

  return (
    <PaymentMethodsContainer>
      <SectionTitle
        icon={{ phosphorIcon: CurrencyDollar, color: colors['brand-purple'] }}
        title="Pagamento"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />

      <PaymentMethodOptions>
        {Object.entries(paymentMethodsData).map(
          ([paymentType, { label, icon }]) => (
            <PaymentMethodInput
              key={label}
              label={label}
              paymentType={paymentType}
              icon={icon}
              {...register('paymentMethod')}
            />
          ),
        )}
      </PaymentMethodOptions>
      {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
    </PaymentMethodsContainer>
  );
}
