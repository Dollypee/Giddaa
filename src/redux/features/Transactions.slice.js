import { createSlice } from "@reduxjs/toolkit";
import { transactionApi } from "../services/transaction.api";
// import { toast } from "@/components/Common";

const initialTransactionState = {
  step: 0,
  selectedQuestionId: null,
  transactions:[]
};

const transactionSlice = createSlice({
  name: "Transaction",
  initialState: initialTransactionState,
  reducers: {
    prevStep: (state) => {
      if (state.step !== 0) {
        state.step -= 1;
      }
    },
    nextStep: (state) => {
      if (state.step !== 3) {
        state.step += 1;
      }
    },
    jumpToStep: (state, action) => {
      state.step = action.payload;
    },
    updateQuizinfo: (state, action) => {
      state.quizInfo = action.payload;
    },
  
  },
  extraReducers: (builder) => {
   
    builder.addMatcher(transactionApi.endpoints.transactionSlice.matchFulfilled, (state) => {
      // Handle the case where creating quiz failed
      // You can revert any state changes or show an error message
      if (state.step === 1) {
        state.step -= 1;
      }
      
    });
  },
});

export default transactionSlice.reducer;

export const { ...actions } = transactionSlice.actions;

export const selectTransactionState = (state) => state.Transactions.transactions;
