import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import Comment from "./Comment";

export default function UseCallBackDemo() {
  const [like, setLike] = useState(1);

  const [number, setNumber] = useState(1);
  const renderLike = () => {
    return (
      <span>
        You have given {like} <i className="fa fa-heart text-danger"></i>!
      </span>
    );
  };
  // useCallBack dùng để giữ lại các giá trị của hàm ở render trước đó

  const callBackRenderLike = useCallback(renderLike, [like]);
  return (
    <div className="container">
      <h3>Number : {number}</h3>
      <button
        className="btn btn-primary"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <div className="card w-25">
        <img src="https://i.pravatar.cc" alt="avatar" />
        <div className="card-body">
          <p>
            Like: {like} <i className="fa fa-heart"></i>
          </p>
          <button
            className="btn btn-danger text-white"
            onClick={() => {
              setLike(like + 1);
            }}
          >
            <i className="fa fa-heart"></i>
          </button>
        </div>
      </div>
      <Comment like={like} renderLike={renderLike} callBackRenderLike={callBackRenderLike}/>
    </div>
  );
}
