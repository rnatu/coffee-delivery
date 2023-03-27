import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export function useCartContext() {
  const value = useContext(CartContext);

  return value;
}
