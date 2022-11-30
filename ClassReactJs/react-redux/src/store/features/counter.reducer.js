import { INCREMENT } from "./counter.actions";

const initialState = { value: 0 };

export const counterReducer = (state = initialState, { type }) => {
  switch (type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};
