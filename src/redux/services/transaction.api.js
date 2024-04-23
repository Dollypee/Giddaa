import { baseApi } from "./api";

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTransactionsSummary: builder.mutation({
      query: () => ({
        url: "developer/transaction/get-summary",
        method: "GET",
      }),
    }),
    getSuccessfulTransactions: builder.mutation({
      query: (pageNumber) => ({
        url: `developer/transaction/get-succesful-payments?pageNumber=${pageNumber}`,
        method: "GET",
      }),
    }),
    getExpectedTransactions: builder.mutation({
      query: (pageNumber) => ({
        url: `developer/transaction/get-expected-payments?pageNumber=${pageNumber}`,
        method: "GET",
      }),
    }),
    getDefaultTransactions: builder.mutation({
      query: (pageNumber) => ({
        url: `developer/transaction/get-missed-payments?pageNumber=${pageNumber}`,
        method: "GET",
      }),
    }),
    
  }),
});

export const { useGetTransactionsSummaryMutation, useGetSuccessfulTransactionsMutation, useGetExpectedTransactionsMutation, useGetDefaultTransactionsMutation } = transactionApi;
