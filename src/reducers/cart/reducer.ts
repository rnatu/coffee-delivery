import { CoffeeType } from '../../data/coffees';
import { ActionTypes } from './action';

type CartState = {
  coffees: CoffeeType[];
};

type ActionType = {
  type: ActionTypes;
  payload: any;
};

export function cartReducer(state: CartState, action: ActionType) {
  switch (action.type) {
    case 'ADD_COFFEE_ON_CART':
      console.log(action.payload);
      return state;

    default:
      return state;
  }
}
