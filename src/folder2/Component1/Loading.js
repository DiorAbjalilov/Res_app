import React from "react";
import Spinner from "react-bootstrap/Spinner";
export default function Loading() {
  return (
    <div className="loading">
      <Spinner animation="border" variant="info" size="xxl" />
    </div>
  );
}
