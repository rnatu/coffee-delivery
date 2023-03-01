import { CurrencyDollar } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { SectionTitle } from '../SectionTitle';
import { PaymentMethodInput } from './PaymentMethodInput';
import { PaymentMethodOptions, PaymentMethodsContainer } from './styles';

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
        <PaymentMethodInput />
        <PaymentMethodInput />
        <PaymentMethodInput />
      </PaymentMethodOptions>
    </PaymentMethodsContainer>
  );
}
