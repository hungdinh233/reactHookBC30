import { configureStore } from "@reduxjs/toolkit";
import facebookReducer from "./reducers/facebookReducer";
import NumberReducer from "./reducers/NumberReducer";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    number: NumberReducer,
    facebookReducer: facebookReducer,
    productReducer: productReducer,
    userReducer: userReducer,
  },
});
