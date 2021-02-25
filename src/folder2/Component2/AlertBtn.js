import React from "react";
import "./menu/menu.css";
export default function AlertBtn({ str, AlertCloseHandler }) {
  return (
    <div className="alert-one">
      <span onClick={AlertCloseHandler}>&times;</span>
      <p> {str} Close</p>
    </div>
  );
}
