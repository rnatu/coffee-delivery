import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { SectionTitle } from '../SectionTitle';
import { PaymentMethodInput } from './PaymentMethodInput';
import { PaymentMethodOptions, PaymentMethodsContainer } from './styles';

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

  return (
    <PaymentMethodsContainer>
      <SectionTitle
        icon={{ phosphorIcon: CurrencyDollar, color: colors['brand-purple'] }}
        title="Pagamento"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />

      <PaymentMethodOptions>
        {Object.entries(paymentMethodsData).map(([type, { label, icon }]) => (
          <PaymentMethodInput key={label} label={label} icon={icon} />
        ))}
      </PaymentMethodOptions>
    </PaymentMethodsContainer>
  );
}
