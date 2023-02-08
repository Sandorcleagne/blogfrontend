import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const blogApi = createApi({
  reducerPath: "blogAPi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/",
  }),
  endpoints: (builder) => ({
    addBlog: builder.mutation({
      query: (blogData) => {
        const { blogContent, blogCategories, blogTitle, authorName, authorId } =
          blogData;
        return {
          url: `createblog`,
          method: "POST",
          body: {
            blogTitle: blogContent,
            blogCategory: blogCategories,
            blogContent: blogTitle,
            authorName: authorName,
            authorId: authorId,
          },
          headers: { "Content-Type": "application/json" },
        };
      },
    }),
  }),
});
export const { useAddBlogMutation } = blogApi;
