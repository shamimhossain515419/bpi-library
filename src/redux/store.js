import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import sidebarToggleSlice from "./features/sidebarToggle/sidebarToggleSlice";

export const store = configureStore({
  reducer: {
    sidebarToggle: sidebarToggleSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
