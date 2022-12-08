import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: `auth`,
  initialState: { isLoggedIn: true },
  reducers: {
    login(state, action) {
      state.isLoggedIn = !state.isLoggedIn;
      console.log(state.isLoggedIn);
    },
    logout(state, action) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
