//rxslice

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  arrProduct: [],
  productDetail: {},
};

const productReducer = createSlice({
  //nhớ tên trong name phải để trong dấu ngoặc kép nhé ""!
  name: "productReducer",
  initialState,
  reducers: {
    getProductAction: (state, action) => {
      //lấy dữ liệu từ payload
      const arrProduct = action.payload;
      //cập nhật lại state
      state.arrProduct = arrProduct;
    },
    getProductDetailAction: (state, action) => {
      const productDetail = action.payload;
      state.productDetail = productDetail;
    },
  },
});
//-------------action: {type, payload}-------------
export const { getProductAction, getProductDetailAction } =
  productReducer.actions;

export default productReducer.reducer;

//-------------action api--------------------------
export const getProductApi = () => {
  return async (dispatch2) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/product",
        method: "GET",
      });
      //Sau khi lấy dữ liệu từ api setState cho arrProduct
      // setArrProduct(result.data.content);
      const action = getProductAction(result.data.content);
      dispatch2(action);
    } catch (err) {
      console.log({ err });
    }
  };
};

export const getProductDetailApi = (id) => {
  return async (dispatch) => {
    // bước 2: thực thi thunk
    try {
      let result = await axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
        method: "GET",
      });
      // setProductDetail(result.data.content);
      //sau khi lấy dữ liệu api thành công => đưa lên reducer = hàm dispatch2 từ thunk
      //bước 3: sau khi có dữ liệu => dispatch lần 2
      const action = getProductDetailAction(result.data.content);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};
