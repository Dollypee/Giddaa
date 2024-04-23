import { createSlice } from "@reduxjs/toolkit";
import { transactionApi } from "../services/transaction.api";
import { toast } from "react-toastify";

const initialTransactionState = {
  transactionsSummary: [],
  successfulTransactions: [],
  expectedTransactions: [],
  defaultTransactions: []
};

const transactionSlice = createSlice({
  name: "Transaction",
  initialState: initialTransactionState,
  reducers: {
    getTransactionSummary: (state, action) => {
      state.transactionsSummary = action.payload
    },
  
  },
  extraReducers: (builder) => {
   
    builder.addMatcher(transactionApi.endpoints.getSuccessfulTransactions.matchFulfilled, (state, action) => {
      state.successfulTransactions = action.payload.value   
    });
    builder.addMatcher(transactionApi.endpoints.getSuccessfulTransactions.matchRejected, (state) => {
      state.successfulTransactions = {}   
      toast.error('Failed to fetch Successful Transactions')
    });
    builder.addMatcher(transactionApi.endpoints.getExpectedTransactions.matchFulfilled, (state, action) => {
      state.expectedTransactions = action.payload.value   
    });
    builder.addMatcher(transactionApi.endpoints.getExpectedTransactions.matchRejected, (state) => {
      state.expectedTransactions = {}   
      toast.error('Failed to fetch Expected Transactions')
    });
    builder.addMatcher(transactionApi.endpoints.getDefaultTransactions.matchFulfilled, (state, action) => {
      state.defaultTransactions = action.payload.value   
    });
    builder.addMatcher(transactionApi.endpoints.getDefaultTransactions.matchRejected, (state) => {
      state.defaultTransactions = {}   
      toast.error('Failed to fetch Default Transactions')
    });
  },
});

export default transactionSlice.reducer;

export const { getTransactionSummary } = transactionSlice.actions;

export const selectTransaction = (state) => state.Transaction.transactions;
