import React from "react";

export default function Desert({ buyurtma1 }) {
  return (
    <table className="table table-bordered table-dark table-sm animation-fud table-hover">
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
          <td className="buyutrman-focus">Bounty</td>
          <td>$2.5</td>
        </tr>
        <tr onClick={buyurtma1}>
          <th scope="row">2</th>
          <td className="buyutrman-focus">Jezerye</td>
          <td>$1.9</td>
        </tr>
        <tr onClick={buyurtma1}>
          <th scope="row">3</th>
          <td className="buyutrman-focus">Magnoliya</td>
          <td>$2.7</td>
        </tr>
        <tr onClick={buyurtma1}>
          <th scope="row">4</th>
          <td className="buyutrman-focus">Gojo</td>
          <td>$1.2</td>
        </tr>
        <tr onClick={buyurtma1}>
          <th scope="row">5</th>
          <td className="buyutrman-focus">Mara</td>
          <td>$2.1</td>
        </tr>
        <tr onClick={buyurtma1}>
          <th scope="row">6</th>
          <td className="buyutrman-focus">Napa</td>
          <td>$1.6</td>
        </tr>
      </tbody>
    </table>
  );
}
