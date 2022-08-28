//rxslice
import { createSlice } from "@reduxjs/toolkit";
//state.faecbookReducer =
const initialState = {
  arrComment: [
    { name: "Johny", content: "good one" },
    { name: "Harry", content: "great!" },
  ],
};

const facebookReducer = createSlice({
  name: "facbookReducer", // tên nối với tên action
  initialState,
  reducers: {
    addComment: (state, action) => {
      const userComment = action.payload;
      //b2: cập nhật state
      state.arrComment.push({...userComment});
    },
  },
});

export const { addComment } = facebookReducer.actions;

export default facebookReducer.reducer;
