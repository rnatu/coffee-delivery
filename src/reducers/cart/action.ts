export enum ActionTypes {
  // eslint-disable-next-line no-unused-vars
  ADD_COFFEE_ON_CART = 'ADD_COFFEE_ON_CART',
}

export function addCoffeeOnCartAction(coffeeId: string) {
  return {
    type: ActionTypes.ADD_COFFEE_ON_CART,
    payload: {
      coffeeId,
    },
  };
}
