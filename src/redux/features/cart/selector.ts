import { State } from "@/redux/store";

export const selectCartModule = (state: State) => state.cart;

export const selectMovieTicketAmount = (state: State, id: string) =>
  selectCartModule(state)[id] || 0;

export const selectTotalTicketAmount = (state: State) => {
  const cart = selectCartModule(state);
  let amount = 0;
  for(let value of Object.values(cart)){
    amount = amount + value;
  }

  return amount;
}
