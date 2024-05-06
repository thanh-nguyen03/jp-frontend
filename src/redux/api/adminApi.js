import baseApi from "src/redux/api/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCommonStatistics: build.query({
      query: () => ({
        url: "/admin/statistics",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCommonStatisticsQuery } = adminApi;
export default adminApi;
