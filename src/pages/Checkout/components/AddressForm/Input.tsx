import { InputHTMLAttributes } from 'react';
import { RegularText } from '../../../../components/Typography';
import { InputContainer, InputStyled, InputWrapper } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  rightText?: string;
}

export function Input({ error, rightText, ...props }: InputProps) {
  return (
    <InputWrapper>
      <InputContainer>
        <InputStyled {...props} />
      </InputContainer>
      {!error && <RegularText size="s">{'error.message aqui'}</RegularText>}
    </InputWrapper>
  );
}
