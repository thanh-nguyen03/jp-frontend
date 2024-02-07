import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { jwtDecode } from "jwt-decode";
import { logout, setCredential, storeTokens } from "src/redux/state/reducers/authReducer";

const baseApiSlice = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_API_URL || "http://it-job-portal.thanhnguyen03.site:8080",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        return headers;
      }
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseApiSlice(args, api, extraOptions);

  if (result.error?.status === 401) {
    const refreshResult = await baseApiSlice(
      {
        url: "/auth/refresh",
        method: "POST",
        body: {
          refreshToken: localStorage.getItem("refreshToken"),
        },
      },
      api,
      extraOptions,
    );

    if (refreshResult.data) {
      const { accessToken, refreshToken, user } = refreshResult.data.data;
      api.dispatch(setCredential({ user }));
      api.dispatch(storeTokens({ accessToken, refreshToken }));
      result = await baseApiSlice(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

const baseApi = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
});

export default baseApi;
