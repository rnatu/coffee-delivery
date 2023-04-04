import { createContext, ReactNode, useReducer } from 'react';
import { CoffeeType } from '../data/coffees';

import { addOnCartAction, removeFromCartAction } from '../reducers/cart/action';
import { cartReducer, CartState } from '../reducers/cart/reducer';

type CartContextType = {
  cartState: CartState;
  addOnCart: (coffee: CoffeeType) => void;
  removeFromCart: (coffee: CoffeeType) => void;
};

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    coffees: [],
    total: 0,
  });

  console.log(cartState);

  function addOnCart(coffee: CoffeeType) {
    dispatch(addOnCartAction(coffee));
  }

  function removeFromCart(coffee: CoffeeType) {
    dispatch(removeFromCartAction(coffee));
  }

  return (
    <CartContext.Provider
      value={{
        cartState,
        addOnCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
