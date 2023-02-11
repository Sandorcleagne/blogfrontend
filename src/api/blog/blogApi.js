import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const blogApi = createApi({
  reducerPath: "blogAPi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/",
  }),
  tagTypes: ["blogs"],
  endpoints: (builder) => ({
    addBlog: builder.mutation({
      query: (blogData) => {
        const { blogContent, blogCategories, blogTitle, authorName, authorId } =
          blogData;
        return {
          url: `createblog`,
          method: "POST",
          body: {
            blogTitle: blogTitle,
            blogCategory: blogCategories,
            blogContent: blogContent,
            authorName: authorName,
            authorId: authorId,
          },
          headers: { "Content-Type": "application/json" },
        };
      },
      invalidatesTags: ["blogs"],
    }),

    getAllBlogs: builder.query({
      query: () => ({ url: `getallblogs`, method: "GET" }),
      providesTags: ["blogs"],
    }),
  }),
});
export const { useAddBlogMutation, useGetAllBlogsQuery } = blogApi;
