import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { jwtDecode } from "jwt-decode";

const baseApiSlice = fetchBaseQuery({
  baseUrl: "https://job.thanhnd.site/ai",
  // baseUrl: "http://localhost/ai",
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

const baseQuery = async (args, api, extraOptions) => {
  return baseApiSlice(args, api, extraOptions);
};

const baseApi = createApi({
  reducerPath: "suggestBaseApi",
  baseQuery: baseQuery,
  tagTypes: ["SuggestJobs", "MostSuitableJob"],
  endpoints: () => ({}),
});

export default baseApi;
