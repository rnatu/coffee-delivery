import { IconProps } from 'phosphor-react';
import React from 'react';
import { useTheme } from 'styled-components';
import { PaymentInputContainer } from './styles';

interface PaymentMethodInputProps {
  label: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export function PaymentMethodInput({ label, icon }: PaymentMethodInputProps) {
  const { colors } = useTheme();

  return (
    <PaymentInputContainer>
      <input type="radio" name="paymentMethod" id={label} />
      <label htmlFor={label}>
        {React.createElement(icon, { size: 16, color: colors['brand-purple'] })}
        <p>{label}</p>
      </label>
    </PaymentInputContainer>
  );
}
