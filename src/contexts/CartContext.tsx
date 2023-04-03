import { createContext, ReactNode, useReducer } from 'react';
import { CoffeeType } from '../data/coffees';

import { addOnCartAction } from '../reducers/cart/action';
import { cartReducer, CartState } from '../reducers/cart/reducer';

type CartContextType = {
  addOnCart: (coffee: CoffeeType) => void;
  cartState: CartState;
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

  // function removeFromCart();

  return (
    <CartContext.Provider
      value={{
        cartState,
        addOnCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
