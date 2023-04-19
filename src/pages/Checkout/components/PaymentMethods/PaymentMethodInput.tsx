import { IconProps } from 'phosphor-react';
import React, { InputHTMLAttributes, forwardRef } from 'react';
import { useTheme } from 'styled-components';
import { PaymentInputContainer } from './styles';

interface PaymentMethodInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  paymentType: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

// eslint-disable-next-line react/display-name
export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ label, paymentType, icon, ...props }, ref) => {
  const { colors } = useTheme();

  return (
    <PaymentInputContainer>
      <input
        type="radio"
        name="paymentMethod"
        id={label}
        value={paymentType}
        ref={ref}
        {...props}
      />
      <label htmlFor={label}>
        {React.createElement(icon, { size: 16, color: colors['brand-purple'] })}
        <p>{label}</p>
      </label>
    </PaymentInputContainer>
  );
});
