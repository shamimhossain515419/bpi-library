import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addnewbook: builder.mutation({
      query: (data) => ({
        url: "books/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddnewbookMutation } = authApi;
