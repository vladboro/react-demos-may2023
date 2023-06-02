import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  count: 0,
};

const basketSlice = createSlice({
  name: "basketSlice",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      if (typeof state.items[product.id] === "undefined") {
        state.items[product.id] = {
          name: product.name,
          quantity: 1,
        };
      } else {
        state.items[product.id].quantity += 1;
      }
      state.count += 1
    },
    clear: (state) => {
      state.items = initialState.items;
      state.count = initialState.count;
    },
  },
});

export const { addItem, clear } = basketSlice.actions;

export default basketSlice.reducer;
