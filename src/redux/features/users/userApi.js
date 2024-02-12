import { apiSlice } from "../api/apiSlice";

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "account/user/get-all-users",
    }),
    get_single_user: builder.query({
      query: (email) => `account/user/get-single-user?id=${email}`,
    }),
  }),
});

export const { useGetAllUsersQuery, useGet_single_userQuery } = usersApi;
