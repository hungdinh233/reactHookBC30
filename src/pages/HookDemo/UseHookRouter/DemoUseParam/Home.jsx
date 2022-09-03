import React from "react";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getProductAction, getProductApi } from "../../../../redux/reducers/productReducer";

export default function Home() {
  // const [arrProduct, setArrProduct] = useState([]);
  //Sử dụng useSelector để lấy dữ liệu từ redux về;
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //call api bằng actionThunk
  const getAllProductApi = () => {
    const actionThunk = getProductApi();
    dispatch(actionThunk)
  };
  useEffect(() => {
    getAllProductApi();
  }, []);

  const renderProduct = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-3 mt-4" key={index}>
          <div className="card">
            <img src={item.image} alt={item.name} />
            <div className="card-body bg-dark text-white">
              <p>{item.name}</p>
              <p>$ {item.price}</p>
              <NavLink className="btn btn-secondary" to={`/detail/${item.id}`}>
                View detail
              </NavLink>
              <button
                className="btn btn-success mx-2"
                onClick={() => {
                  navigate(`/detail/${item.id}`);
                }}
              >
                Detail
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <h3 className="text-center">Shoes App</h3>
      <div className="row">{renderProduct()}</div>
    </div>
  );
}
