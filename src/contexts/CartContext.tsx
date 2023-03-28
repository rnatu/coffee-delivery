import { createContext, ReactNode, useReducer } from 'react';
import { CoffeeType } from '../data/coffees';

import { addCoffeeOnCartAction } from '../reducers/cart/action';
import { cartReducer } from '../reducers/cart/reducer';

type CartContextType = {
  addCoffeeOnCart: (coffee: CoffeeType) => void;
};

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    coffees: [],
  });

  function addCoffeeOnCart(coffee: CoffeeType) {
    dispatch(addCoffeeOnCartAction(coffee));
  }

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
