import { createContext, ReactNode, useReducer } from 'react';

import {
  addOnCartAction,
  changeCartItemQuantityAction,
  clearCartAction,
  removeFromCartAction,
} from '../reducers/cart/action';
import {
  cartReducer,
  CartState,
  CoffeeCartType,
} from '../reducers/cart/reducer';

type CartContextType = {
  cartState: CartState;
  addOnCart: (coffee: CoffeeCartType) => void;
  removeFromCart: (coffee: CoffeeCartType) => void;
  changeCartItemQuantity: (
    coffee: CoffeeCartType,
    changeQuantity: 'increase' | 'decrease',
  ) => void;
  clearCart: () => void;
};

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

const initialState = {
  coffees: [],
  total: 0,
};

export function CartContextProvider({ children }: CartContextProviderProps) {
  const COFFEE_ITEMS_STORAGE_KEY = '@coffee-delivery: cart-state-1.0.0';

  const [cartState, dispatch] = useReducer(cartReducer, initialState, () => {
    const storedStateAsJSON = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON);
    }
    return initialState;
  });

  function addOnCart(coffee: CoffeeCartType) {
    dispatch(addOnCartAction({ coffee }));
  }

  function removeFromCart(coffee: CoffeeCartType) {
    dispatch(removeFromCartAction({ coffee }));
  }

  function changeCartItemQuantity(
    coffee: CoffeeCartType,
    changeQuantity: 'increase' | 'decrease',
  ) {
    dispatch(changeCartItemQuantityAction({ coffee, changeQuantity }));
  }

  function clearCart() {
    dispatch(clearCartAction());
  }

  // useEffect(() => {
  //   localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartState));
  // }, [cartState]);
  localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartState));

  return (
    <CartContext.Provider
      value={{
        cartState,
        addOnCart,
        removeFromCart,
        changeCartItemQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
