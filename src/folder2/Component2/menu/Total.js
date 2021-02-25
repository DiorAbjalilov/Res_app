import React from "react";

export default function Total({ arr, stolNum }) {
  let sum = 0;
  for (let item of arr) {
    sum += item.kg * item.narxi;
  }
  console.log(arr);
  return (
    <div className="text-light">
      <div>Total: ${sum.toFixed(2)}</div>
      <div>Stol Numer:{stolNum}</div>
    </div>
  );
}
