import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import AuthReducer from "./features/Auth.slice"
import transactionReducer from "./features/Transactions.slice"
import { baseApi } from "./services/api"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
// const rootReducer = combineSlices(AuthSlice, TransactionsSlice)

const rootReducer = combineReducers({
  auth: AuthReducer,
  transaction: transactionReducer,
  [baseApi.reducerPath]: baseApi.reducer,
})

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);


// The store setup is wrapped in `makeStore` to allow reuse
// when setting up tests that need the same store config
export const makeStore = (preloadedState) => {
  const store = configureStore({
    reducer: persistedReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware().concat(baseApi.middleware)
    },
    preloadedState,
  })
  // configure listeners using the provided defaults
  // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
  setupListeners(store.dispatch)
  return store
}

export const store = makeStore()

export const persistor = persistStore(store);


export const createPreloadedState = (
  customState
) => {
  return {
    auth: { ...store.getState().auth, ...customState.auth },
    transaction: { ...store.getState().transaction, ...customState.transaction },
  };
};