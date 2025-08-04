import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import cartReducer from "../features/cart/cartSlice";
import uiSlice from "../features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    ui: uiSlice,
  },
});
