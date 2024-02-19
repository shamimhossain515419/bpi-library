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
    RemoveBook: builder.mutation({
      query: (data) => ({
        url: `books/remove?id=${dada}`,
        method: "DELETE",
        body: data,
      }),
    }),

    getAllboks: builder.query({
      query: (id) => `books/get-all?${id}`,
    }),
    getSingleBook: builder.query({
      query: (id) => `books/single-by-id?id=${id}`,
    }),
  }),
});

export const {
  useGetAllboksQuery,
  useRemoveBookMutation,
  useAddnewbookMutation,
  useGetSingleBookQuery,
} = authApi;
