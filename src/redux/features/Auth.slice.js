import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "@/components/Common";
import { adminApi } from "../services/admin.api";

const initialAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducerPath: 'auth',
  reducers: {
    logout: () => {
      return initialAuthState;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(adminApi.endpoints.adminLogin.matchFulfilled, (state, { payload }) => {
      state.token = payload.data.token;
      state.user = { ...payload.data.adminDetails, isAdmin: true };
    });

    // builder.addMatcher(adminApi.endpoints.adminLogin.matchRejected, (state, { payload }) => {
    //   toast({
    //     status: "error",
    //     title: "Failed to login",
    //     description: payload.data.message,
    //   });
    // });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
