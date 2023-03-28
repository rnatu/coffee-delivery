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
      <IconWrapper disabled={amount <= 1}>
        <Minus size={14} weight="bold" onClick={onDecrease} />
      </IconWrapper>
      <input type="number" readOnly value={amount} />
      <IconWrapper>
        <Plus size={14} weight="bold" onClick={onIncrease} />
      </IconWrapper>
    </QuantityInputContainer>
  );
}
