import baseApi from "src/redux/api/suggestJobBaseApi.js";

const suggestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSuggestList: build.query({
      query: ({ cvId }) => ({
        url: `/suggest-job/cv/${cvId}`,
        method: "GET",
      }),
      providesTags: ["SuggestJobs"],
    }),
    getMostSuitableJob: build.query({
      query: ({ cvId }) => ({
        url: `/suggest-job/cv/${cvId}/most-suitable-job`,
        method: "GET",
      }),
      providesTags: ["MostSuitableJob"],
    }),
  }),
});

export const { useGetSuggestListQuery, useLazyGetMostSuitableJobQuery } = suggestApi;
export default suggestApi;
