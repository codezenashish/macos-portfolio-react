import { configureStore } from "@reduxjs/toolkit";
import osReducer from "../features/osSlice";
export const store = configureStore({
  reducer: {
    os: osReducer,
  },
});
