import { baseApi } from "./api";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
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

export const { useAdminLoginMutation } = adminApi;
