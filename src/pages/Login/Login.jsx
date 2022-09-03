import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login(props) {
  //lấy dữ liệu từ form
  const frm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    //check validation
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("email không được bỏ trống")
        .email("email không đúng định dạng"),
      password: Yup.string()
        .required("password không được bỏ trống")
        .min(6, "password từ 6 đến 32 kí tự")
        .max(32, "(password từ 6 đến 32 kí tự"),
        //.matches() => cái này để check đúng 100%
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form className="container" onSubmit={frm.handleSubmit}>
      <h3>Log In</h3>
      <div className="form-group">
        <p>Email</p>
        <input
          type="text"
          className="form-control"
          id="email"
          onChange={frm.handleChange}
          onBlur={frm.handleBlur}
        />
        {frm.errors.email ? (
          <span className="text-danger">{frm.errors.email}</span>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <p>Password</p>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={frm.handleChange}
          onBlur={frm.handleBlur}
        />
        {frm.errors.password ? (
          <span className="text-danger">{frm.errors.password}</span>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <button className="btn btn-success mt-3" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}
