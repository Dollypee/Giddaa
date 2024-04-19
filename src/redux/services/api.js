import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// initialize an empty api service that we'll inject endpoints into later as needed
export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URI,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = getState().auth.token;
      if (token) {
        if ((token)) {
          location.reload();
        } else {
          headers.set("authorization", `Bearer ${token}`);
        }
      }
      return headers;
    },
    validateStatus: (response, body) => {
      return response.status >= 200 && response.status <= 299 && body.status === true;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["User", "Auth"],
});
