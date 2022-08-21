import React, { memo } from "react";

export default function Comment(props) {
  console.log("comment");
  return (
    <div className="mt-2">
      {props.renderLike()}
      <textarea
        name=""
        id=""
        cols="50"
        rows="3"
        className="form-control"
      ></textarea>
      <br />
      <button>Send</button>
    </div>
  );
}
