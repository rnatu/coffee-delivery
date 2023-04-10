import { CoffeeType } from '../../data/coffees';

export enum ActionTypes {
  /* eslint-disable no-unused-vars */
  ADD_COFFEE_ON_CART = 'ADD_COFFEE_ON_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
  CHANGE_CART_ITEM_QUANTITY = 'CHANGE_CART_ITEM_QUANTITY',
}

export type PayloadType = {
  coffee: CoffeeType;
  changeQuantity?: 'increase' | 'decrease';
};

export function addOnCartAction({ coffee }: PayloadType) {
  return {
    type: ActionTypes.ADD_COFFEE_ON_CART,
    payload: {
      coffee,
    },
  };
}

export function removeFromCartAction({ coffee }: PayloadType) {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: {
      coffee,
    },
  };
}

export function changeCartItemQuantityAction({
  coffee,
  changeQuantity,
}: PayloadType) {
  return {
    type: ActionTypes.CHANGE_CART_ITEM_QUANTITY,
    payload: {
      coffee,
      changeQuantity,
    },
  };
}
