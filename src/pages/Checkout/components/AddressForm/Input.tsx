import { InputHTMLAttributes } from 'react';
import { InputStyled } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  rightText?: string;
}

export function Input({ ...props }: InputProps) {
  return (
    <>
      <InputStyled {...props} />
    </>
  );
}
