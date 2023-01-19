import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const registrationApi = createApi({
  reducerPath: "registrationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/",
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => {
        return {
          url: `registeruser`,
          method: "POST",
          body: userData,
          headers: { "Content-Type": "application/json" },
        };
      },
    }),
  }),
});
export const { useRegisterUserMutation } = registrationApi;
