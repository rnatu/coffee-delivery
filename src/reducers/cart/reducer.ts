import { CoffeeType } from '../../data/coffees';
import { ActionTypes } from './action';

type CartState = {
  coffees: CoffeeType[];
};

type ActionType = {
  type: ActionTypes;
  payload: {
    coffee: CoffeeType;
  };
};

export function cartReducer(state: CartState, action: ActionType) {
  switch (action.type) {
    case 'ADD_COFFEE_ON_CART': {
      const coffeeAlreadyExists = state.coffees.find(
        (coffee) => coffee.id === action.payload.coffee.id,
      );

      if (coffeeAlreadyExists) {
        return {
          ...state,
          coffees: state.coffees.map((coffee) =>
            coffee.id === action.payload.coffee.id
              ? {
                  ...coffee,
                  amount: coffee.amount + action.payload.coffee.amount,
                }
              : {
                  ...coffee,
                },
          ),
        };
      }

      return {
        ...state,
        coffees: [...state.coffees, action.payload.coffee],
      };
    }

    default:
      return state;
  }
}
