import React from "react";
import "../menu/menu.css";
export default function menu({ fudClick, menu }) {
  return (
    <div
      className={`btn-group-vertical w-100 ${menu && "menu_css"} ${
        !menu && "opshi-menu"
      }`}
    >
      <button
        type="button"
        className={`btn btn-dark xok ${menu && " mm1"}`}
        onClick={fudClick}
      >
        Bar
      </button>
      <button
        type="button"
        className={`btn btn-dark xok ${menu && " mm1"}`}
        onClick={fudClick}
      >
        Salat
      </button>
      <button
        type="button"
        className={`btn btn-dark xok ${menu && " mm1"}`}
        onClick={fudClick}
      >
        Desert
      </button>
      <button
        type="button"
        className={`btn btn-dark xok ${menu && " mm1"}`}
        onClick={fudClick}
      >
        Foods
      </button>
    </div>
  );
}
