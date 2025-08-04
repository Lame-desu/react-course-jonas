import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = {
        ...state.items,
        [action.payload.pizza.id]: { ...action.payload.pizza, qty: 1 },
      };
    },
    increase: (state, action) => {
      const item = state.items[action.payload.id];
      state.items = {
        ...state.items,
        [action.payload.id]: { ...item, qty: item.qty + 1 },
      };
    },
    decrease: (state, action) => {
      const item = state.items[action.payload.id];
      const newVal = item.qty - 1;
      if (newVal <= 0) {
        cartReducer.caseReducers.deleteItem(state, action);
        return;
      }

      state.items = {
        ...state.items,
        [action.payload.id]: { ...item, qty: newVal },
      };
    },

    deleteItem: (state, action) => {
      const deleteId = action.payload.id;
      const { [deleteId]: _, ...rest } = state.items;
      state.items = rest;
    },

    clearCart: (state) => {
      state.items = {};
    },
  },
});
export const { addToCart, increase, decrease, deleteItem, clearCart } =
  cartReducer.actions;

export const getCartItems = (state) => state.cart.items;

export default cartReducer.reducer;
