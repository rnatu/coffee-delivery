import produce from 'immer';

import { CoffeeType } from '../../data/coffees';
import { ActionTypes, PayloadType } from './action';

export type CartState = {
  coffees: CoffeeType[];
  total: number;
};

export type ActionType = {
  type: ActionTypes;
  payload: PayloadType;
};

// % com immer
export const cartReducer = produce(
  (draft: CartState, { type, payload }: ActionType) => {
    // O retorno da função produce é o novo estado criado com as alterações que você realizou. Portanto, mesmo que não haja uma instrução return explícita no bloco do switch, a função produce ainda retorna o novo estado modificado com as alterações que você realizou
    function getCoffeeIndexOnCart() {
      return draft.coffees.findIndex(
        (coffee) => coffee.id === payload.coffee.id,
      );
    }

    switch (type) {
      case 'ADD_COFFEE_ON_CART': {
        draft.total += payload.coffee.amount * payload.coffee.price;

        const coffeeAlreadyOnCart = getCoffeeIndexOnCart();

        if (coffeeAlreadyOnCart !== -1) {
          draft.coffees[coffeeAlreadyOnCart].amount += payload.coffee.amount;
          // console.log(JSON.stringify(draft, null, 2));
          break;
        } else {
          draft.coffees.push(payload.coffee);
          break;
        }
      }

      case 'REMOVE_COFFEE_FROM_CART': {
        draft.coffees = draft.coffees.filter(
          (coffee) => coffee.id !== payload.coffee.id,
        );

        draft.total = draft.coffees.reduce((prev, curr) => {
          return prev + curr.amount * curr.price;
        }, 0);
        break;
      }

      case 'CHANGE_CART_ITEM_QUANTITY': {
        const coffeeIndex = getCoffeeIndexOnCart();

        console.log('aqui');
        if (payload.changeQuantity === 'increase') {
          draft.coffees[coffeeIndex].amount++;
          break;
        }

        if (
          payload.changeQuantity === 'decrease' &&
          payload.coffee.amount > 1
        ) {
          draft.coffees[coffeeIndex].amount--;
          break;
        }

        break;
      }

      default:
        break;
    }
  },
);

// % sem immer
// export function cartReducer(state: CartState, { type, payload }: ActionType) {
//   switch (type) {
//     case 'ADD_COFFEE_ON_CART': {
//       const coffeeAlreadyExists = state.coffees.some(
//         (coffee) => coffee.id === payload.coffee.id,
//       );

//       const total = state.total + payload.coffee.amount * payload.coffee.price;

//       if (coffeeAlreadyExists) {
//         return {
//           ...state,
//           coffees: state.coffees.map((coffee) =>
//             coffee.id === payload.coffee.id
//               ? {
//                   ...coffee,
//                   amount: coffee.amount + payload.coffee.amount,
//                 }
//               : coffee,
//           ),
//           total,
//         };
//       }

//       return {
//         ...state,
//         coffees: [...state.coffees, payload.coffee],
//         total,
//       };
//     }

//     default:
//       return state;
//   }
// }
