import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeNumber } from "../../../redux/reducers/NumberReducer";

export default function DemoNumber() {
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();
  console.log(number);
  return (
    <div className="container">
      <h3>Number : {number}</h3>
      <button
        className="btn btn-success"
        onClick={() => {
          const action = {
            // changeNumber(number + 1),
            // type: "CHANGE_NUMBER",
            // payload: number + 1,
          };
          dispatch(action);
        }}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
}
