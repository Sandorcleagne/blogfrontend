import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  blogTitle: "",
  blogCategories: [],
  blogContent: "",
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlogTitle: (state, action) => {
      state.blogTitle = action.payload;
    },
    addBlogContent: (state, action) => {
      state.blogContent = action.payload;
    },
    addBlogCategories: (state, action) => {
      state.blogCategories = action.payload;
    },
  },
});
export const { addBlogTitle, addBlogContent, addBlogCategories } =
  blogSlice.actions;
export default blogSlice.reducer;
