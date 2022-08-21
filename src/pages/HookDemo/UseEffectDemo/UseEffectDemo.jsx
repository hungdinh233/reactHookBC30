import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

let timeout = {};
export default function UseEffectDemo(props) {
  const [arrProduct, setArrProduct] = useState([
    { id: 2, name: "Product1", image: "https://i.pravatar.cc", price: 1000 },
  ]);

  const [count, setCount] = useState(60);
  const renderProduct = () => {
    return arrProduct.map((prod, index) => {
      return (
        <div className="col-3" key={index}>
          <div className="card">
            <img src={prod.image} alt="..." />
            <div className="card-body">
              <h3>{prod.name}</h3>
              <p>{prod.price}</p>
              <button className="btn btn-dark">Add to cart</button>
            </div>
          </div>
        </div>
      );
    });
  };

  const getAPI = async () => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
      });
      //   console.log(result.data.content);
      setArrProduct(result.data.content);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    //dependency (tham số thứ 2 là mảng thì hàm này chạy 1 lần duy nhất sau khi giao diện render lần đầu tiên)
    // tương đương componentDidMount

    getAPI();
    timeout = setInterval(() => {
      setCount((count) => {
        return count - 1;
      });
      console.log(342343)
    }, 1000);

    return () => {
      //Những lệnh cài đặt sẽ chạy khi component mất khỏi giao diện (tương đương componentWillUnMount);
      clearInterval(timeout);
    };
    // console.log(count);
  }, []);

  return (
    <div className="container">
      <h3>Count: {count}</h3>
      <h3>Shoes App</h3>
      <div className="row">{renderProduct()}</div>
    </div>
  );
}
