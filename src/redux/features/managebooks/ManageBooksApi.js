import { apiSlice } from "../api/apiSlice";

export const ManageBooksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addbook: builder.mutation({
      query: (data) => ({
        url: "managebook/createbook",
        method: "POST",
        body: data,
      }),
    }),
    removeCartBook: builder.mutation({
      query: (data) => ({
        url: `managebook/remove-cart-book?id=${data}`,
        method: "DELETE",
        body: data,
      }),
    }),
    getAllApply: builder.query({
      query: (status) => `managebook/getbooks?status=${status}`,
    }),
    getCart: builder.query({
      query: (id) => `managebook/get-user-by-cart?id=${id}`,
    }),
  }),
});

export const {
  useGetCartQuery,
  useRemoveCartBookMutation,
  useAddbookMutation,
  useGetAllApplyQuery,
} = ManageBooksApi;
