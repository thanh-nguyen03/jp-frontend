import baseApi from "src/redux/api/baseApi";

const applicationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
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
  }),
});

export const { useApplyRecruitmentMutation, useUpdateApplicationMutation, useGetUserApplicationOfRecruitmentQuery } =
  applicationApi;

export default applicationApi;
