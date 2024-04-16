import baseApi from "src/redux/api/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getHello: build.query({
      query: () => ({
        url: "/admin-sample",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetHelloQuery } = adminApi;
export default adminApi;
