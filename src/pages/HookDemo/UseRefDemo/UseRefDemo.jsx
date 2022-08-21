import React from "react";
import { useRef } from "react";
import { useState } from "react";
/*
useState lấy giá trị inp => khi có tính năng chỉnh load lại form trên cùng giao diện
useref thường được sử dụng trong form, không bao gồm chỉnh sửa và load lại
useRef: lưu lại các giá trị sau mỗi lần render
*/
export default function UseRefDemo(props) {
  //   const [userLogin, setUserLogin] = useState({
  //     username: "",
  //     password: "",
  //   });
  //   console.log(userLogin);

  const userLoginRef = useRef({
    username: "",
    password: "",
  });

  //   console.log(userLogin);
  const handleChange = (e) => {
    let { id, value } = e.target;
    userLoginRef.current[id] = value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userLoginRef.current);
  };
  return (
    <form action="" className="form-control container" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      <div className="form-group">
        <p>Username</p>
        <input
          type="text"
          name=""
          className="form-control"
          id="username"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <p>Password</p>
        <input
          type="password"
          name=""
          className="form-control"
          id="password"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}
