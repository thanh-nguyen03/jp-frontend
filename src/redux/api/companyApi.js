import convertObjectToQueryParams from "src/helpers/convertObjectToQueryParams";
import baseApi from "src/redux/api/baseApi";

const companyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
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
  useGetAllCompaniesQuery,
  useGetDetailCompanyQuery,
  useCreateCompanyMutation,
  usePutCompanyMutation,
  useDeleteCompanyMutation,
} = companyApi;
export default companyApi;
