import { CoffeeCartType } from './reducer';

export enum ActionTypes {
  /* eslint-disable no-unused-vars */
  ADD_COFFEE_ON_CART = 'ADD_COFFEE_ON_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
  CHANGE_CART_ITEM_QUANTITY = 'CHANGE_CART_ITEM_QUANTITY',
  CLEAR_CART = 'CLEAR_CART',
}

export type ActionPayloads = {
  coffee?: CoffeeCartType;
  changeQuantity?: 'increase' | 'decrease';
};

export function addOnCartAction({ coffee }: ActionPayloads) {
  return {
    type: ActionTypes.ADD_COFFEE_ON_CART,
    payload: {
      coffee,
    },
  };
}

export function removeFromCartAction({ coffee }: ActionPayloads) {
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
}: ActionPayloads) {
  return {
    type: ActionTypes.CHANGE_CART_ITEM_QUANTITY,
    payload: {
      coffee,
      changeQuantity,
    },
  };
}

export function clearCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
  };
}
