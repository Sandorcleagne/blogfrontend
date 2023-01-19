import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { registrationApi } from "../api/authApi/registration";
import { loginApi } from "../api/authApi/loginUser";
import authReducer from "../features/authSlice";
const store = configureStore({
  reducer: {
    [registrationApi.reducerPath]: registrationApi.reducer,
    [loginApi.reducerPath]: registrationApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      registrationApi.middleware,
      loginApi.middleware
    ),
});
setupListeners(store.dispatch);

export default store;
