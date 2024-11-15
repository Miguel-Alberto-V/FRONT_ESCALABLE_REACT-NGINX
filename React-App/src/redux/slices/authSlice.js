// redux/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoginPage: true,
  },
  reducers: {
    showLoginPage: (state) => {
      state.isLoginPage = true;
    },
    showRegisterPage: (state) => {
      state.isLoginPage = false;
    },
  },
});

export const { showLoginPage, showRegisterPage } = authSlice.actions;
export default authSlice.reducer;
