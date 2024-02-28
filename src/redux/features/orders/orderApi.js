import { apiSlice } from "../api/apiSlice";

export const OrderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    CreateOrder: builder.mutation({
      query: (data) => ({
        url: "managebook/createbook",
        method: "POST",
        body: data,
      }),
    }),
    removeOrder: builder.mutation({
      query: (data) => ({
        url: `managebook/remove-cart-book?id=${data}`,
        method: "DELETE",
        body: data,
      }),
    }),
    getUserByOrder: builder.query({
      query: (id) => `managebook/get-user-by-cart?id=${id}`,
    }),
  }),
});

export const {} = OrderApi;
