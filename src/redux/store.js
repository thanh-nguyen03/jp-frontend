import { configureStore } from "@reduxjs/toolkit";
import adminApi from "src/redux/api/adminApi";
import authApi from "src/redux/api/authApi";
import companyApi from "src/redux/api/companyApi";

import authReducer from "src/redux/state/reducers/authReducer";

const store = configureStore({
  reducer: {
    // state reducers
    auth: authReducer,

    // api reducers
    [authApi.reducerPath]: authApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [companyApi.reducerPath]: companyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
