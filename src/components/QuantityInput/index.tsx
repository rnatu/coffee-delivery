import { Minus, Plus } from 'phosphor-react';
import { IconWrapper, QuantityInputContainer } from './styles';

interface QuantityInputProps {
  size?: 'medium' | 'small';
  amount: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

export function QuantityInput({
  size = 'medium',
  amount,
  onDecrease,
  onIncrease,
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper type="button" disabled={amount <= 1} onClick={onDecrease}>
        <Minus size={14} weight="bold" />
      </IconWrapper>
      <input type="number" readOnly value={amount} />
      <IconWrapper type="button" onClick={onIncrease}>
        <Plus size={14} weight="bold" />
      </IconWrapper>
    </QuantityInputContainer>
  );
}
