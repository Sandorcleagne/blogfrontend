import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userData) => {
        return {
          url: `loginuser`,
          method: "POST",
          body: userData,
          headers: { "Content-Type": "application/json" },
        };
      },
    }),
  }),
});
export const { useLoginUserMutation } = loginApi;
