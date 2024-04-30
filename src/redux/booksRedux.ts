import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../interfaces/Book.interface";

const initialState: Book[] = [];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook(state, action: PayloadAction<Book>) {
      state.push(action.payload);
    },
    removeBook(state, action: PayloadAction<string>) {
      const index = state.findIndex((book) => book.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
