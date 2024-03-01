"use client";
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const getCookie = (name, defaultValue) => {
  const cookieValue = Cookies.get(name);
  return cookieValue !== undefined ? JSON.parse(cookieValue) : defaultValue;
};

const setCookie = (key, value) => {
  Cookies.set(key, JSON.stringify(value), { expires: 7 }); // Expires in 7 days
};

const items =
  getCookie("cartItems", []) !== null ? getCookie("cartItems", []) : [];

const totalAmount =
  getCookie("totalAmount", 0) !== null ? getCookie("totalAmount", 0) : 0;

const totalQuantity =
  getCookie("totalQuantity", 0) !== null ? getCookie("totalQuantity", 0) : 0;

const setItemFunc = (item, totalAmount, totalQuantity) => {
  setCookie("cartItems", item);
  setCookie("totalAmount", totalAmount);
  setCookie("totalQuantity", totalQuantity);
};

const initialState = {
  status: false,
  cartItems: items,
  Loading: false,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.Loading = true;
      const newItem = action.payload;
      const id = newItem.id;
      const extraIngredients = newItem.extraIngredients;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === id
      );

      if (existingItemIndex === -1) {
        state.cartItems.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
          extraIngredients: extraIngredients,
        });
        state.totalQuantity++;
      } else {
        const existingItem = state.cartItems[existingItemIndex];
        if (
          JSON.stringify(existingItem.extraIngredients) ===
          JSON.stringify(extraIngredients)
        ) {
          existingItem.quantity++;
          existingItem.totalPrice = existingItem.price * existingItem.quantity;
          state.totalQuantity++;
        } else {
          existingItem.quantity--;
          if (existingItem.quantity === 0) {
            state.cartItems.splice(existingItemIndex, 1);
            state.totalQuantity--;
          }

          const newCartItem = {
            ...newItem,
            quantity: 1,
            totalPrice: newItem.price,
            extraIngredients: extraIngredients,
          };
          state.cartItems.push(newCartItem);
          state.totalQuantity++;
        }
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.totalPrice),
        0
      );

      state.Loading = false;
      state.status = true;
      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === id
      );

      if (existingItemIndex !== -1) {
        const existingItem = state.cartItems[existingItemIndex];
        state.totalQuantity--;

        if (existingItem.quantity === 1) {
          state.cartItems.splice(existingItemIndex, 1);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
