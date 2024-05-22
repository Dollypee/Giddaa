import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// initialize an empty api service that we'll inject endpoints into later as needed
export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = getState()?.auth?.token;
      if (token) {
        if ((token)) {
          headers.set("authorization", `Bearer ${token}`);
        } else {
          // headers.set("authorization", `Bearer ${token}`);
        }
      }
      return headers;
    },
    validateStatus: (response) => {
      return response.status >= 200 && response.status <= 299;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["User", "Auth"],
});
