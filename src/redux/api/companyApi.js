import convertObjectToQueryParams from "src/helpers/convertObjectToQueryParams";
import baseApi from "src/redux/api/baseApi";

const companyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // common endpoints
    userGetAllCompanies: build.query({
      query: (query) => ({
        url: `/companies?${convertObjectToQueryParams(query)}`,
        method: "GET",
      }),
      providesTags: ["Company"],
    }),
    userGetCompanyDetail: build.query({
      query: (id) => ({
        url: `/companies/${id}`,
        method: "GET",
      }),
      providesTags: ["Company"],
    }),

    // admin endpoints
    getAllCompanies: build.query({
      query: (query) => ({
        url: `/admin/companies?${convertObjectToQueryParams(query)}`,
        method: "GET",
      }),
      providesTags: ["Company"],
    }),
    getDetailCompany: build.query({
      query: (id) => ({
        url: `/admin/companies/${id}`,
        method: "GET",
      }),
      providesTags: ["Company"],
    }),
    createCompany: build.mutation({
      query: (body) => ({
        url: "/admin/companies",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Company"],
    }),
    putCompany: build.mutation({
      query: ({ id, ...body }) => ({
        url: `/admin/companies/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Company"],
    }),
    deleteCompany: build.mutation({
      query: (id) => ({
        url: `/admin/companies/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Company"],
    }),
  }),
});

export const {
  useUserGetAllCompaniesQuery,
  useUserGetCompanyDetailQuery,

  useGetAllCompaniesQuery,
  useGetDetailCompanyQuery,
  useCreateCompanyMutation,
  usePutCompanyMutation,
  useDeleteCompanyMutation,
} = companyApi;

export default companyApi;
