import React from "react";

export default function Salat({ buyurtma1 }) {
  return (
    <table className="table table-sm table-bordered table-dark animation-fud table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Money</th>
        </tr>
      </thead>
      <tbody>
        <tr onClick={buyurtma1}>
          <th scope="row">1</th>
          <td className="buyutrman-focus">Aliviy</td>
          <td>$0.5</td>
        </tr>
        <tr onClick={buyurtma1}>
          <th scope="row">2</th>
          <td className="buyutrman-focus">Tuna</td>
          <td>$0.7</td>
        </tr>
        <tr onClick={buyurtma1}>
          <th scope="row">3</th>
          <td className="buyutrman-focus">Tofu</td>
          <td>$0.6</td>
        </tr>
        <tr onClick={buyurtma1}>
          <th scope="row">4</th>
          <td className="buyutrman-focus">Kale</td>
          <td>$0.9</td>
        </tr>
        <tr onClick={buyurtma1}>
          <th scope="row">5</th>
          <td className="buyutrman-focus">Spinach</td>
          <td>$1.0</td>
        </tr>
        <tr onClick={buyurtma1}>
          <th scope="row">6</th>
          <td className="buyutrman-focus">Chimche</td>
          <td>$0.4</td>
        </tr>
      </tbody>
    </table>
  );
}
