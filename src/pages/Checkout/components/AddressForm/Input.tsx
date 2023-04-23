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
        {error && (
          <RegularText
            size="s"
            style={{
              color: '#db0000',
              marginTop: '0.2rem',
              fontStyle: 'italic',
            }}
          >
            {error}
          </RegularText>
        )}
      </div>
    );
  },
);
