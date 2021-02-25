import React from "react";

export default function Bar({ buyurtma1 }) {
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
          <td className="buyutrman-focus">Pepsi</td>
          <td>$1.2</td>
        </tr>
        <tr onClick={buyurtma1}>
          <th scope="row">2</th>
          <td className="buyutrman-focus">Coco Cola</td>
          <td>$1.1</td>
        </tr>
        <tr onClick={buyurtma1}>
          <th scope="row">3</th>
          <td className="buyutrman-focus">Fanta</td>
          <td>$1.4</td>
        </tr>
        <tr onClick={buyurtma1}>
          <th scope="row">4</th>
          <td className="buyutrman-focus">Chay</td>
          <td>$0.4</td>
        </tr>
        <tr onClick={buyurtma1}>
          <th scope="row">5</th>
          <td className="buyutrman-focus">Kofe</td>
          <td>$0.7</td>
        </tr>
        <tr onClick={buyurtma1}>
          <th scope="row">6</th>
          <td className="buyutrman-focus">Limon Chay</td>
          <td>$0.2</td>
        </tr>
      </tbody>
    </table>
  );
}
