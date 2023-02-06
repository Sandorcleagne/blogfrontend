import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const blogApi = createApi({
  reducerPath: "blogAPi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/",
  }),
  endpoints: (builder) => ({
    addBlog: builder.mutation({
      query: (blogData) => {
        return {
          url: `createblog`,
          method: "POST",
          body: {
            blogTitle: "test title now",
            blogCategory: ["sports", "Cricket"],
            blogContent: "test content",
            authorName: "Harsh Joshi",
          },
          headers: { "Content-Type": "application/json" },
        };
      },
    }),
  }),
});
export const { useAddBlogMutation } = blogApi;
