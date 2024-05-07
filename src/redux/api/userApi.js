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
    changePassword: build.mutation({
      query: (data) => ({
        url: "/users/change-password",
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { useAdminGetUsersQuery, useAdminGetUserDetailQuery, useChangePasswordMutation } = userApi;
export default userApi;
