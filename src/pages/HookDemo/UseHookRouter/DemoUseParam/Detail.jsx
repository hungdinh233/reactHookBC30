import React from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailApi } from "../../../../redux/reducers/productReducer";

export default function Detail() {
  // const [productDetail, setProductDetail] = useState({});
  const { productDetail } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    let { id } = params;
    //dispatch action thunk
    //bước 1: disptach action thunk
    const action = getProductDetailApi(id);
    dispatch(action);
  }, [params.id]);
  return (
    <div>
      <h3>Params: Product - {params.id}</h3>
      <div className="row">
        <div className="col-4">
          <img src={productDetail.image} alt={productDetail.name} />
        </div>
        <div className="col-8">
          <h1>{productDetail.name}</h1>
        </div>
      </div>
      <div className="container">
        <h3 className="text-center">---RELATED PRODUCT---</h3>
        <div className="row mt-2">
          {/* toán tử 7: optional chaining */}
          {productDetail.relatedProducts?.map((item, index) => {
            return (
              <div className="col-4 mt-4" key={index}>
                <div className="card">
                  <img src={item.image} alt={item.name} />
                  <div className="card-body bg-dark text-white">
                    <p>{item.name}</p>
                    <p>$ {item.price}</p>
                    <NavLink
                      className="btn btn-secondary"
                      to={`/detail/${item.id}`}
                    >
                      View detail
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
