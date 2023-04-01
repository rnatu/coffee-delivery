import { CoffeeType } from '../../data/coffees';
import { ActionTypes } from './action';

export type CartState = {
  coffees: CoffeeType[];
  total: number;
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

      const total = state.total + payload.coffee.amount * payload.coffee.price;

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
          total,
        };
      }

      return {
        ...state,
        coffees: [...state.coffees, payload.coffee],
        total,
      };
    }

    default:
      return state;
  }
}
