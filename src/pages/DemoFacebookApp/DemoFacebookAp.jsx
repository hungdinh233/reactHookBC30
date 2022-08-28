import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../redux/reducers/facebookReducer";

export default function DemoFacebookAp() {
  const { arrComment } = useSelector((state) => state.facebookReducer);
  //   console.log(arrComment);
  const userComment = useRef({ name: "", content: "" });
  const dispatch = useDispatch();
  const renderComment = () => {
    return arrComment.map((comment, index) => {
      return (
        <div className="row" key={index}>
          <div className="col-1">
            <img
              src={`https://i.pravatar.cc?u=${comment.name}`}
              alt="avatar"
              width={70}
              height={70}
            />
          </div>
          <div className="col-10">
            <h3 className="text-danger">{comment.name}</h3>
            <p>{comment.content}</p>
          </div>
        </div>
      );
    });
  };
  const handleChangeInput = (e) => {
    //lấy ra id, value của thẻ;
    e.preventDefault();
    const { id, value } = e.target;
    userComment.current[id] = value;
    console.log(userComment.current);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //đưa dữ liệu lên redux
    //cách 1: tự tạo action
    // const action ={
    //     type: "facebookReducer/addComment",
    //     payload: "1234"
    // }
    // dispatch(action)

    //cách 2: dùng action creator của reduxslice;
    const action = addComment(userComment.current);
    dispatch(action);
    document.querySelector("#name").value = "";
    document.querySelector("#content").value = "";
  };
  return (
    <div className="container">
      <h3>Demo facebook app</h3>
      <div className="card">
        <div className="card-header">{renderComment()}</div>
        <div className="card-body">
          <form action="" className="frm" onSubmit={handleSubmit}>
            <div className="form-group">
              <p>Name</p>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={handleChangeInput}
              />
            </div>
            <div className="form-group mb-4">
              <p>Content</p>
              <input
                type="text"
                className="form-control"
                id="content"
                onChange={handleChangeInput}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-success" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
