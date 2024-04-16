import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredential: (state, action) => {
      const { user } = action.payload;
      if (user) {
        state.isAuthenticated = true;
        state.user = user;
      } else {
        state.isAuthenticated = false;
        state.user = null;
      }
    },
    storeTokens: (state, action) => {
      const { access_token, refresh_token } = action.payload;
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("refreshToken", refresh_token);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },
});

export const { setCredential, storeTokens, logout } = authSlice.actions;
export default authSlice.reducer;
