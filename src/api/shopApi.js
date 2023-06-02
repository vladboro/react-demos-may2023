import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
    getProductById: builder.query({
      query: (productId) => `products/${productId}`,
    }),
    getStockByProductId: builder.query({
      query: (productId) => `stock?productId=${productId}`,
    }),
    postNewOrder: builder.mutation({
      query: (order) => ({ url: "orders", method: "POST", body: order }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useLazyGetStockByProductIdQuery,
  usePostNewOrderMutation
} = shopApi;
