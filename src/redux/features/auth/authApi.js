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
    getSingleIser: builder.query({
      query: (email) => `account/user/get-single-user-by-email?email=${email}`,
    }),
  }),
});

export const {
  useRegisteruserMutation,
  useGetSingleIserQuery,
  useLoginuserMutation,
} = authApi;
