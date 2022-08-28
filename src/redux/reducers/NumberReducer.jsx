import { createSlice, creatSlice } from "@reduxjs/toolkit";

const initialState = 1;

const numberReducer = createSlice({
  name: "numberReducer",
  initialState, //giá tị ban đầu của state
  reducers: {
    changeNumber: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { changeNumber } = numberReducer.actions;
export default numberReducer.reducer;
