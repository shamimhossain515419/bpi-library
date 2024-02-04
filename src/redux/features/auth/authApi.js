import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registeruser: builder.mutation({
      query: (data) => ({
        url: "account/user/register",
        method: "POST",
        body: data,
      }),
    }),
    loginuser: builder.mutation({
      query: (data) => ({
        url: "account/user/login",
        method: "POST",
        body: data,
      }),
    }),
    get_single_user: builder.query({
      query: (email) => `account/user/get-single-user?id=${email}`,
    }),
    getAllUsers: builder.query({
      query: () => "account/user/get-all-users",
    }),
  }),
});

export const {
  useRegisteruserMutation,
  useLoginuserMutation,
  useGetAllUsersQuery,
} = authApi;
