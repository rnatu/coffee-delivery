import produce from 'immer';

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

// % com immer
export const cartReducer = produce(
  (draft: CartState, { type, payload }: ActionType) => {
    // O retorno da função produce é o novo estado criado com as alterações que você realizou. Portanto, mesmo que não haja uma instrução return explícita no bloco do switch, a função produce ainda retorna o novo estado modificado com as alterações que você realizou
    switch (type) {
      case 'ADD_COFFEE_ON_CART': {
        draft.total += payload.coffee.amount * payload.coffee.price;

        const coffeeAlreadyExists = draft.coffees.findIndex(
          (coffee) => coffee.id === payload.coffee.id,
        );

        if (coffeeAlreadyExists !== -1) {
          draft.coffees[coffeeAlreadyExists].amount += payload.coffee.amount;
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
