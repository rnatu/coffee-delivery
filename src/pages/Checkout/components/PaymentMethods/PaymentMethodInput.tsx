import { IconProps } from 'phosphor-react';
import React, { forwardRef } from 'react';
import { useTheme } from 'styled-components';
import { PaymentInputContainer } from './styles';

interface PaymentMethodInputProps {
  label: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

// eslint-disable-next-line react/display-name
export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ label, icon, ...props }, ref) => {
  const { colors } = useTheme();

  return (
    <PaymentInputContainer>
      <input
        type="radio"
        name="paymentMethod"
        id={label}
        value={label}
        {...props}
        ref={ref}
      />
      <label htmlFor={label}>
        {React.createElement(icon, { size: 16, color: colors['brand-purple'] })}
        <p>{label}</p>
      </label>
    </PaymentInputContainer>
  );
});
