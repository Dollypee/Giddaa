import { baseApi } from "./api";

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.mutation({
      query: (credentials) => ({
        url: "AdminUser/AdminLogin",
        method: "POST",
        body: credentials,
      }),
    }),
    protected: builder.mutation({
      query: () => "protected",
    }),
  }),
});

export const { useGetTransactionsMutation } = transactionApi;
