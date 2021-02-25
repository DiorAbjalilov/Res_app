import React from "react";

export default function Foods({ buyurtma1 }) {
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
          <td className="buyutrman-focus">Shashlik</td>
          <td>$1.3</td>
        </tr>
        <tr onClick={buyurtma1}>
          <th scope="row">2</th>
          <td className="buyutrman-focus">Jiz</td>
          <td>$4.25</td>
        </tr>
        <tr onClick={buyurtma1}>
          <th scope="row">3</th>
          <td className="buyutrman-focus">Shashlik Qiyma</td>
          <td>$1.2</td>
        </tr>
        <tr onClick={buyurtma1}>
          <th scope="row">4</th>
          <td className="buyutrman-focus">Tandir Kabob</td>
          <td>$9.8</td>
        </tr>
        <tr onClick={buyurtma1}>
          <th scope="row">5</th>
          <td className="buyutrman-focus">Somsa</td>
          <td>$0.5</td>
        </tr>
        <tr onClick={buyurtma1}>
          <th scope="row">6</th>
          <td className="buyutrman-focus">Tabaka</td>
          <td>$2.15</td>
        </tr>
      </tbody>
    </table>
  );
}
