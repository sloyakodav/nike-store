import { configureStore } from "@reduxjs/toolkit";
import NikeReducer from "./fr/nike/nikeSlice.jsx";
export const store = configureStore({
  reducer: { nike: NikeReducer },
});
