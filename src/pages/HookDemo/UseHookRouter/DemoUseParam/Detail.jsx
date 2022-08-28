import React from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function Detail() {
  const [productDetail, setProductDetail] = useState({});
  const params = useParams();

  const getProductDetailAPI = async () => {
    let { id } = params;
    try {
      let result = await axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
        method: "GET",
      });
      setProductDetail(result.data.content);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    //call api
    getProductDetailAPI();
  }, []);
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
          {/* toán tử 7: optionail chaining */}
          {productDetail.relatedProducts?.map((item, index) => {
            return (
              <div className="col-3 mt-4" key={index}>
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
