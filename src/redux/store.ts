import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksRedux";

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
