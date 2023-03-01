import { CreditCard } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { PaymentInputContainer } from './styles';

export function PaymentMethodInput() {
  const { colors } = useTheme();
  return (
    <PaymentInputContainer>
      <input type="radio" name="a" id="test1" />
      <label htmlFor="test1">
        <CreditCard size={16} color={colors['brand-purple']} />
        <p>Cartão de crédito</p>
      </label>
    </PaymentInputContainer>
  );
}
