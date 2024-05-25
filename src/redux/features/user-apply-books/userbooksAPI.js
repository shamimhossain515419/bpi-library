import { apiSlice } from "../api/apiSlice";

export const userbooksAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSingleUserApplyBooks: builder.query({
      query: (data) =>
        `student-books/applybooks?status=${data?.status}&email=${data?.email}`,
    }),
  }),
});

export const { useGetSingleUserApplyBooksQuery } = userbooksAPI;
