import { configureStore } from "@reduxjs/toolkit";
import NumberReducer from "./reducers/NumberReducer";

export const store = configureStore({
  reducer: {
    number: NumberReducer,
    // number: (state = 1, action) => {
    //   switch (action.type) {
    //     case "CHANGE_NUMBER": {
    //       state = action.payload;
    //       return state;
    //     }
    //     default: {
    //       return state;
    //     }
    //   }
    // },
  },
});
