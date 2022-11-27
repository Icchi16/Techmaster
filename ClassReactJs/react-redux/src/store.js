import { createStore } from "redux";

// ACtion constant => biến chung giữ tên action
const INCREMENT = "counter/increment";
const DECREMENT = "counter/decrement";

// ACtion creator =? hàm tạo action
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

const initialState = { value: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };

    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return { ...state };
  }
};

const INPUT = "joke/input";

const input = (value) => ({ type: INPUT, payload: value });

const jokeReducer = (state = "", { type, payload }) => {
  switch (type) {
    case INPUT:
      return payload;
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducer({
  counter: counterReducer,
  joke: jokeReducer,
});

const store = createStore(counterReducer);

const value = document.querySelector(".count");
const btnUp = document.querySelector(".btn-up");
const btnDown = document.querySelector(".btn-down");
const inputEl = document.querySelector(".input");
const p = document.querySelector(".output");

store.subscribe(() => (value.textContent = store.getState()));
store.subscribe(() => (p.textContent = store.getState()));

btnUp.onclick = () => store.dispatch(increment());
btnDown.onclick = () => store.dispatch(decrement());
inputEl.oninput = (e) => store.dispatch(input(e.target.value));
