import React from "react";
import { stol } from "./stol";
export default function HomePage() {
  return (
    <div className="home-page">
      {stol.map(({ h3, h4, id }) => (
        <div className="stol" key={id}>
          <h3>{h3}</h3>
          <h4>{h4}</h4>
        </div>
      ))}
    </div>
  );
}
