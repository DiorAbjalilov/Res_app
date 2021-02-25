import React from "react";
import NewLi from "./menu/newLi";
import "./menu/menu.css";
import Total from "./menu/Total";
export default function List() {
  const clearAll = () => {
    window.localStorage.data = JSON.stringify([]);
  };
  return (
    <div className="container">
      <button className="btn btn-danger px-5 btn-sm mt-1" onClick={clearAll}>
        Clear All
      </button>
      {JSON.parse(window.localStorage.data).map((item, index) => (
        <div className="list-of-order" key={index}>
          <NewLi array={item.props.array} />
          <Total arr={item.props.array} stolNum={item.props.stolNum} />
        </div>
      ))}
    </div>
  );
}
