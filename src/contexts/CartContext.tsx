import { createContext, ReactNode } from 'react';

type CartContextType = {
  test: string;
};

export const CartContext = createContext({} as CartContextType);

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
