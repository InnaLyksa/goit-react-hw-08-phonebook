import { createSlice } from '@reduxjs/toolkit';
import authOperations from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(authOperations.addNewUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logoutUser.pending, state => {
        state.isLoggedIn = false;
      })
      .addCase(authOperations.logoutUser.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.logoutUser.rejected, state => {
        state.isLoggedIn = true;
      })
      .addCase(authOperations.refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(authOperations.refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});
export const authReducer = authSlice.reducer;
