import baseApi from "src/redux/api/baseApi";

const fileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    uploadFile: build.mutation({
      query: (body) => ({
        url: "/files",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useUploadFileMutation } = fileApi;
export default fileApi;
