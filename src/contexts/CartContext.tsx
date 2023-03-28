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
    switch (action.type) {
      case 'ADD_COFFEE_ON_CART':
        console.log(action.payload);
        return state;

      default:
        return state;
    }
  }

  const [cartState, dispatch] = useReducer(cartReducer, {
    coffees: [],
  });

  console.log(cartState);

  function addCoffeeOnCart(coffeeId: string) {
    dispatch({
      type: 'ADD_COFFEE_ON_CART',
      payload: {
        coffeeId,
      },
    });
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
