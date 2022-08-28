import React from "react";
import { DatePicker, Button } from "antd";

export default function AntDesignDemo() {
  return (
    <div className="container">
      <DatePicker />
      <Button size="large" type="primary" danger>Button Click</Button>
    </div>
  );
}
