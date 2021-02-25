import React from "react";

export default function newLi({ array }) {
  return (
    <div>
      {array.map(({ id, kg, buyurtma, narxi }, index) => (
        <li className="pag-30-tab-item" key={id}>
          <div>{index + 1}</div>
          <div>{buyurtma}</div>
          <div>{`${kg} * $${narxi}`}</div>
          <div>{`Total: $${(kg * narxi).toFixed(2)}`}</div>
        </li>
      ))}
    </div>
  );
}
