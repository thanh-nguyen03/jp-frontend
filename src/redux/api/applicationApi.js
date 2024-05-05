import baseApi from "src/redux/api/baseApi";

const applicationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // user endpoints
    applyRecruitment: build.mutation({
      query: (body) => ({
        url: "/applications",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Application"],
    }),
    updateApplication: build.mutation({
      query: ({ applicationId, ...body }) => ({
        url: `/applications/${applicationId}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Application"],
    }),
    getUserApplicationOfRecruitment: build.query({
      query: (recruitmentId) => ({
        url: `/recruitments/${recruitmentId}/user-application`,
        method: "GET",
      }),
      providesTags: ["Application"],
    }),

    // company admin endpoints
    getRecruitmentApplications: build.query({
      query: (recruitmentId) => ({
        url: `/admin/recruitments/${recruitmentId}/applications`,
        method: "GET",
      }),
      providesTags: ["Application"],
    }),
    getApplicationDetail: build.query({
      query: (applicationId) => ({
        url: `/admin/applications/${applicationId}`,
        method: "GET",
      }),
      providesTags: ["Application"],
    }),
    updateApplicationStatus: build.mutation({
      query: ({ applicationId, ...body }) => ({
        url: `/admin/applications/${applicationId}/status`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Application"],
    }),
  }),
});

export const {
  useApplyRecruitmentMutation,
  // useUpdateApplicationMutation,
  useGetUserApplicationOfRecruitmentQuery,
  useGetRecruitmentApplicationsQuery,
  useGetApplicationDetailQuery,
  useUpdateApplicationStatusMutation,
} = applicationApi;

export default applicationApi;
