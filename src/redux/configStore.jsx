import { configureStore } from "@reduxjs/toolkit";
import facebookReducer from "./reducers/facebookReducer";
import NumberReducer from "./reducers/NumberReducer";

export const store = configureStore({
  reducer: {
    number: NumberReducer,
    facebookReducer: facebookReducer,
  },
});
