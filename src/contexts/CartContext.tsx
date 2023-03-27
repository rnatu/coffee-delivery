import { createContext, ReactNode } from 'react';

export const CartContext = createContext({});

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const test = 'Testando Provider';

  console.log(test);

  return (
    <CartContext.Provider
      value={{
        test,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
