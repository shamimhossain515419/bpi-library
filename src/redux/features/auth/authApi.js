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
    updateUser: builder.mutation({
      query: (data) => ({
        url: "account/user/update-user",
        method: "PATCH",
        body: data,
      }),
    }),
    getSingleIser: builder.query({
      query: (data) => `account/user/get-single-user-by-email?email=${data}`,
    }),
  }),
});

export const {
  useRegisteruserMutation,
  useGetSingleIserQuery,
  useUpdateUserMutation,
  useLoginuserMutation,
} = authApi;
