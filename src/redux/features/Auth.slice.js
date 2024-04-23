import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducerPath: 'auth',
  reducers: {
    setUser: (
      state,
      action
    ) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          user: action.payload.user,
          token: action.payload.token
        })
      );   
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      localStorage.clear();
      state.user = null;
      state.token = null;
    },
  },
  
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectAuth = (state) => state.auth.user;
