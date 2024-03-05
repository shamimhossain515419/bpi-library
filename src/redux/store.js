import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import sidebarToggleSlice from "./features/sidebarToggle/sidebarToggleSlice";
import cartSlice from "./features/cart/cartSlice";
import FilterSlice from "./features/filter/FilterSlice";

export const store = configureStore({
  reducer: {
    sidebarToggle: sidebarToggleSlice,
    cart: cartSlice,
    filter: FilterSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
