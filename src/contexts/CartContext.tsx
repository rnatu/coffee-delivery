import { createContext, ReactNode, useReducer } from 'react';
import { CoffeeType } from '../data/coffees';

import {
  addOnCartAction,
  changeCartItemQuantityAction,
  removeFromCartAction,
} from '../reducers/cart/action';
import { cartReducer, CartState } from '../reducers/cart/reducer';

type CartContextType = {
  cartState: CartState;
  addOnCart: (coffee: CoffeeType) => void;
  removeFromCart: (coffee: CoffeeType) => void;
  changeCartItemQuantity: (
    coffee: CoffeeType,
    changeQuantity: 'increase' | 'decrease',
  ) => void;
};

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

const COFFEE_ITEMS_STORAGE_KEY = '@coffee-delivery: cart-state-1.0.0';

const initialState = {
  coffees: [],
  total: 0,
};

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, initialState, () => {
    const storedStateAsJSON = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON);
    }
    return initialState;
  });

  function addOnCart(coffee: CoffeeType) {
    dispatch(addOnCartAction({ coffee }));
  }

  function removeFromCart(coffee: CoffeeType) {
    dispatch(removeFromCartAction({ coffee }));
  }

  function changeCartItemQuantity(
    coffee: CoffeeType,
    changeQuantity: 'increase' | 'decrease',
  ) {
    dispatch(changeCartItemQuantityAction({ coffee, changeQuantity }));
  }

  localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartState));

  // useEffect(() => {
  //   localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartState));
  // }, [cartState]);

  return (
    <CartContext.Provider
      value={{
        cartState,
        addOnCart,
        removeFromCart,
        changeCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
