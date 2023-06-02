import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "./api/shopApi";
import basketSliceReducer from "./features/basketSlice"

export const store = configureStore({
  reducer: {
    [shopApi.reducerPath]: shopApi.reducer,
    basket: basketSliceReducer 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
});
