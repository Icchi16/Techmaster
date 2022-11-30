import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/Counter";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
