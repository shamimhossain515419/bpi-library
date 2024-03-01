import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import sidebarToggleSlice from "./features/sidebarToggle/sidebarToggleSlice";
import cartSlice from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    sidebarToggle: sidebarToggleSlice,
    cart: cartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
