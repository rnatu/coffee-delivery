/* eslint-disable react/display-name */
import { InputHTMLAttributes, forwardRef } from 'react';
import { RegularText } from '../../../../components/Typography';
import { InputStyled, InputStyledContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  rightText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, rightText, error, ...props }, ref) => {
    return (
      <div className={className}>
        <InputStyledContainer>
          <InputStyled {...props} ref={ref} />
          {rightText && <RegularText size="s">{rightText}</RegularText>}
        </InputStyledContainer>
        {error && <RegularText size="s">{error}</RegularText>}
      </div>
    );
  },
);
