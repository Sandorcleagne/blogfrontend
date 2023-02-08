import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { registrationApi } from "../api/authApi/registration";
import { loginApi } from "../api/authApi/loginUser";
import { blogApi } from "../api/blog/blogApi";
import authReducer from "../features/authSlice";
import blogReducer from "../features/blogSlice";
const store = configureStore({
  reducer: {
    [registrationApi.reducerPath]: registrationApi.reducer,
    [loginApi.reducerPath]: registrationApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    auth: authReducer,
    blog: blogReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      registrationApi.middleware,
      loginApi.middleware,
      blogApi.middleware
    ),
});
setupListeners(store.dispatch);

export default store;
