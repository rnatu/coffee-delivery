import { createContext, ReactNode, useReducer } from 'react';
import { CoffeeType } from '../data/coffees';

type CartContextType = {
  addCoffeeOnCart: (coffeeId: string) => void;
};

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

type CartState = {
  coffees: CoffeeType[];
};
export function CartContextProvider({ children }: CartContextProviderProps) {
  function cartReducer(state: CartState, action: any) {
    switch (action) {
      case 'ADD_COFFEE_ON_CART':
        console.log('action ADD_COFFEE_ON_CART');
        return state;

      default:
        return state;
    }
  }

  const [CartState, dispatch] = useReducer(cartReducer, {
    coffees: [],
  });

  function addCoffeeOnCart(coffeeId: string) {
    dispatch('ADD_COFFEE_ON_CART');
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
