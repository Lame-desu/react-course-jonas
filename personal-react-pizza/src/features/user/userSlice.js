import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const { setName } = userReducer.actions;

export default userReducer.reducer;
