import produce from 'immer';

import { CoffeeType } from '../../data/coffees';
import { ActionTypes, ActionPayloads } from './action';

export type CoffeeCartType = CoffeeType & {
  amount: number;
};

export type CartState = {
  coffees: CoffeeCartType[];
  total: number;
};

export type ActionType = {
  type: ActionTypes;
  payload?: ActionPayloads;
};

export const cartReducer = produce(
  (draft: CartState, { type, payload }: ActionType) => {
    function getCoffeeIndexOnCart() {
      return draft.coffees.findIndex(
        (coffee) => coffee.id === payload?.coffee?.id,
      );
    }

    function calculateTotalOnCart() {
      draft.total = draft.coffees.reduce((prev, curr) => {
        return prev + curr.amount * curr.price;
      }, 0);
    }

    switch (type) {
      case 'ADD_COFFEE_ON_CART': {
        if (payload?.coffee) {
          const coffeeAlreadyOnCart = getCoffeeIndexOnCart();

          if (coffeeAlreadyOnCart !== -1) {
            draft.coffees[coffeeAlreadyOnCart].amount += payload.coffee.amount;
            calculateTotalOnCart();
            break;
          }

          draft.coffees.push(payload.coffee);
          calculateTotalOnCart();
          break;
        }
        break;
      }

      case 'REMOVE_COFFEE_FROM_CART': {
        if (payload?.coffee) {
          draft.coffees = draft.coffees.filter(
            (coffee) => coffee.id !== payload.coffee?.id,
          );
          calculateTotalOnCart();
        }
        break;
      }

      case 'CHANGE_CART_ITEM_QUANTITY': {
        if (payload?.coffee) {
          const coffeeIndex = getCoffeeIndexOnCart();

          if (
            payload.changeQuantity === 'decrease' &&
            payload.coffee.amount > 1
          ) {
            draft.coffees[coffeeIndex].amount--;
            calculateTotalOnCart();
            break;
          }

          draft.coffees[coffeeIndex].amount++;
          calculateTotalOnCart();
        }
        break;
      }

      case 'CLEAR_CART': {
        draft.coffees = [];
        draft.total = 0;
        break;
      }

      default:
        break;
    }
  },
);
