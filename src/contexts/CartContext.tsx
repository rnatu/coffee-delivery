import { createContext, ReactNode, useReducer } from 'react';

import { addCoffeeOnCartAction } from '../reducers/cart/action';
import { cartReducer } from '../reducers/cart/reducer';

type CartContextType = {
  addCoffeeOnCart: (coffeeId: string) => void;
};

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    coffees: [],
  });

  console.log(cartState);

  function addCoffeeOnCart(coffeeId: string) {
    dispatch(addCoffeeOnCartAction(coffeeId));
  }

  console.log('CartContext Carregado');

  return (
    <CartContext.Provider
      value={{
        addCoffeeOnCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
