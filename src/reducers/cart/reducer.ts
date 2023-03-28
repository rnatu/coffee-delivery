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
      console.log(state.coffees);
      state.coffees.map((coffee) => {
        console.log('o');
        // if (coffee.id === action.payload.coffeeId) {
        //   console.log(coffee.name);
        // }
        return coffee;
      });
      return state;

    default:
      return state;
  }
}
