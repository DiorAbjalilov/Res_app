import React, { useState } from "react";
import OshxonaMenu from "./menu/menu";
import Bar from "./menu/Bar";
import Desert from "./menu/Desert";
import Foods from "./menu/Foods";
import Salat from "./menu/Salat";
import AlerBtn from "./AlertBtn";
export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [fuds, setFuds] = useState([false, false, false, false]);
  const fudClick = e => {
    setMenuOpen(false);
    e.target.classList.add("ful_Click");
    const er = document.querySelectorAll(".xok");
    let indexA = null;
    [...er].forEach((item, index) => {
      if (item.classList === e.target.classList) indexA = index;
    });
    setFuds(oldFuds =>
      oldFuds.map((item, index) => {
        if (indexA === index) return true;
        return false;
      })
    );
  };
  const AlertCloseHandler = () => {
    setTimeout(() => {
      setFuds([false, false, false, false]);
      setMenuOpen(true);
    });
  };
  return (
    <div className="bt">
      {menuOpen && <OshxonaMenu fudClick={fudClick} menu />}
      {fuds[0] && <Bar />}
      {fuds[1] && <Salat />}
      {fuds[2] && <Desert />}
      {fuds[3] && <Foods />}

      {(fuds[0] || fuds[1] || fuds[2] || fuds[3]) && (
        <AlerBtn
          str={`${(fuds[0] && "Bar") ||
            (fuds[1] && "Salat") ||
            (fuds[2] && "Desert") ||
            (fuds[3] && "Foods")}`}
          AlertCloseHandler={AlertCloseHandler}
        />
      )}
    </div>
  );
}
