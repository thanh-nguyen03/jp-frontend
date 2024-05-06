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
    getCompanyHRs: build.query({
      query: () => ({
        url: `/admin/companies/my-company/hr`,
        method: "GET",
      }),
      providesTags: ["CompanyHR"],
    }),
    createCompanyHR: build.mutation({
      query: (body) => ({
        url: `/admin/companies/my-company/hr`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["CompanyHR"],
    }),
    deleteCompanyHR: build.mutation({
      query: (hrId) => ({
        url: `/admin/companies/my-company/hr/${hrId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CompanyHR"],
    }),
  }),
});

export const {
  useGetCommonStatisticsQuery,
  useGetCompanyStatisticsQuery,
  useGetCompanyHRsQuery,
  useCreateCompanyHRMutation,
  useDeleteCompanyHRMutation,
} = adminApi;
export default adminApi;
