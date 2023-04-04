import { CoffeeType } from '../../data/coffees';

export enum ActionTypes {
  /* eslint-disable no-unused-vars */
  ADD_COFFEE_ON_CART = 'ADD_COFFEE_ON_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
}

export function addOnCartAction(coffee: CoffeeType) {
  return {
    type: ActionTypes.ADD_COFFEE_ON_CART,
    payload: {
      coffee,
    },
  };
}
export function removeFromCartAction(coffee: CoffeeType) {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: {
      coffee,
    },
  };
}
