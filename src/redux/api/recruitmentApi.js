import convertObjectToQueryParams from "src/helpers/convertObjectToQueryParams";
import baseApi from "src/redux/api/baseApi";

const recruitmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // common endpoints
    getAllRecruitments: build.query({
      query: (query) => ({
        url: `/recruitments?${convertObjectToQueryParams(query)}`,
        method: "GET",
      }),
      providesTags: ["Recruitment"],
    }),
    getRecruitmentDetailForUser: build.query({
      query: (recruitmentId) => ({
        url: `/recruitments/${recruitmentId}`,
        method: "GET",
      }),
      providesTags: ["Recruitment"],
    }),

    // company admin endpoints
    getCompanyRecruitments: build.query({
      query: (query) => ({
        url: `/admin/recruitments?${convertObjectToQueryParams(query)}`,
        method: "GET",
      }),
      providesTags: ["Recruitment"],
    }),
    getRecruitmentDetail: build.query({
      query: (recruitmentId) => ({
        url: `/admin/recruitments/${recruitmentId}`,
        method: "GET",
      }),
      providesTags: ["Recruitment"],
    }),
    createRecruitment: build.mutation({
      query: (body) => ({
        url: "/admin/recruitments",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Recruitment"],
    }),
    updateRecruitment: build.mutation({
      query: ({ recruitmentId, ...body }) => ({
        url: `/admin/recruitments/${recruitmentId}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Recruitment"],
    }),
    deleteRecruitment: build.mutation({
      query: (recruitmentId) => ({
        url: `/admin/recruitments/${recruitmentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Recruitment"],
    }),
  }),
});

export const {
  // common hooks
  useGetAllRecruitmentsQuery,
  useGetRecruitmentDetailForUserQuery,

  // company admin hooks
  useGetCompanyRecruitmentsQuery,
  useGetRecruitmentDetailQuery,
  useCreateRecruitmentMutation,
  useUpdateRecruitmentMutation,
  useDeleteRecruitmentMutation,
} = recruitmentApi;

export default recruitmentApi;
