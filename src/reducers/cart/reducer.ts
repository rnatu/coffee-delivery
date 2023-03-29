import { CoffeeType } from '../../data/coffees';
import { ActionTypes } from './action';

export type CartState = {
  coffees: CoffeeType[];
};

type ActionType = {
  type: ActionTypes;
  payload: {
    coffee: CoffeeType;
  };
};

export function cartReducer(state: CartState, { type, payload }: ActionType) {
  switch (type) {
    case 'ADD_COFFEE_ON_CART': {
      const coffeeAlreadyExists = state.coffees.some(
        (coffee) => coffee.id === payload.coffee.id,
      );

      if (coffeeAlreadyExists) {
        return {
          ...state,
          coffees: state.coffees.map((coffee) =>
            coffee.id === payload.coffee.id
              ? {
                  ...coffee,
                  amount: coffee.amount + payload.coffee.amount,
                }
              : coffee,
          ),
        };
      }

      return {
        ...state,
        coffees: [...state.coffees, payload.coffee],
      };
    }

    default:
      return state;
  }
}
