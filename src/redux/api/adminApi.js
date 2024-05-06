import baseApi from "src/redux/api/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCommonStatistics: build.query({
      query: () => ({
        url: "/admin/statistics",
        method: "GET",
      }),
    }),

    // company admin endpoints
    getCompanyStatistics: build.query({
      query: () => ({
        url: "/admin/statistics/company",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCommonStatisticsQuery, useGetCompanyStatisticsQuery } = adminApi;
export default adminApi;
