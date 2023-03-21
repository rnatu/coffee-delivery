import { InputHTMLAttributes } from 'react';
import { RegularText } from '../../../../components/Typography';
import { InputStyled, InputStyledContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  //! error?: string;
  rightText?: string;
}

export function Input({ className, rightText, ...props }: InputProps) {
  return (
    <>
      <InputStyledContainer className={className}>
        <InputStyled {...props} />
        <RegularText size="s">{rightText}</RegularText>
      </InputStyledContainer>
    </>
  );
}
