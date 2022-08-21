//rfc
import { useState } from "react";
import React from "react";
import BaiTapChonXe from "./BaiTapChonXe";

export default function UseStateDemo() {
  /*
  useState là hàm của react cung cấp
  lưu ý không gọi hàm này trong file if else hay swtich 
  [giá trị thay đổi, hàm set lại giá trị thay đổi] =  useState(giá trị mặc định ban đầu)
  
  */
  const [like, setLike] = useState(1);
  return (
    <div className="container">
      <div className="card w-25">
        <img src="https://i.pravatar.cc?u=1" alt="avatar" />
        <div className="card-body">
          <h3>Họ tên: Nguyễn A</h3>
          <p>Tuổi: 18</p>
          <p>Like: {like}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              setLike(like + 1);
            }}
            // thằng hàm setLike nếu mình truyền 1 thằng giá trị vào thì nó sẽ redner ra giá trị đó luôn vd: setLike(5) thì like ban đầu sẽ là 5
          >
            Like
          </button>
        </div>
      </div>
      <BaiTapChonXe/>
    </div>
  );
}
