import baseApi from "src/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    adminGetUsers: build.query({
      query: () => ({
        url: "/admin/users",
        method: "GET",
      }),
    }),
    adminGetUserDetail: build.query({
      query: (userId) => ({
        url: `/admin/users/${userId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAdminGetUsersQuery, useAdminGetUserDetailQuery } = userApi;
export default userApi;
