import React, { useState, useEffect } from "react";
import "./menu/menu.css";
import Bar from "./menu/Bar";
import NewLi from "./menu/newLi";
import Desert from "./menu/Desert";
import Foods from "./menu/Foods";
import Salat from "./menu/Salat";
import "./btnCal.css";

import OshxonaMenu from "./menu/menu";
export default function NewOrder() {
  const [stolNum, setStolNum] = useState("");
  if (!localStorage.data) localStorage.data = JSON.stringify([]);
  const [fuds, setFuds] = useState([false, false, false, false]);
  const [menuOpen, setMenuOpen] = useState(true);
  const fudClick = (e) => {
    setMenuOpen(false);
    e.target.classList.add("ful_Click");
    const er = document.querySelectorAll(".xok");
    let indexA = null;
    [...er].forEach((item, index) => {
      if (item.classList === e.target.classList) indexA = index;
    });
    setFuds((oldFuds) =>
      oldFuds.map((item, index) => {
        if (indexA === index) return true;
        return false;
      })
    );
  };
  const [mal, setMal] = useState([]);
  const CloseFuds = () => {
    setFuds([false, false, false, false]);
    setMenuOpen(true);
    setMal((oldMal) => {
      return [
        ...oldMal,
        { buyurtma, kg, narxi, id: new Date().getTime().toString() },
      ];
    });
    setBuyurtma("");
    setKg("");
    setNarxi("");
  };
  const [buyurtma, setBuyurtma] = useState("");
  const [kg, setKg] = useState("");
  const [narxi, setNarxi] = useState("");

  // stol numeri
  const buyurtma1 = (e) => {
    setBuyurtma(e.target.innerText);
    let price = e.target.nextSibling.innerText.split("");
    price.splice(0, 1);
    price = price.join("");
    setNarxi(price);
  };
  const CalHandler = (e) => {
    if (buyurtma) {
      setKg(kg + e.target.innerText);
    }
    if (!document.getElementById("stol_num").disabled) {
      if (
        Number(stolNum + e.target.innerText) > 0 &&
        Number(stolNum + e.target.innerText) <= 20
      )
        setStolNum(stolNum + e.target.innerText);
    }
  };
  const [allArr, setAllArr] = useState(JSON.parse(window.localStorage.data));
  const sendKitchen = () => {
    if (mal.length) {
      setAllArr((oldArr) => {
        return [...oldArr, <NewLi array={mal} stolNum={stolNum} />];
      });
      setStolNum("");
      setMal([]);
    }
  };
  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(allArr));
  }, [allArr]);
  const xHandler = () => {
    if (kg) {
      let dat = kg;
      let arr = dat.split("");
      arr.splice(arr.length - 1, 1);
      setKg(arr.join(""));
    }
    if (!document.getElementById("stol_num").disabled && stolNum) {
      let dat = stolNum;
      let arr = dat.split("");
      arr.splice(arr.length - 1, 1);
      setStolNum(arr.join(""));
    }
  };
  return (
    <div className="new-order">
      <div className="page-30">
        <ul className="pag-30-tab">
          <NewLi array={mal} />
        </ul>
      </div>
      <div className="page-70">
        <div className="btnBarBlock">
          <div className="intBarBlock">
            <span>Stol Num:</span>
            <input
              type="text"
              className="fud-input Stol"
              value={stolNum}
              onChange={CalHandler}
              id="stol_num"
            />
            <input
              type="text"
              className="fud-input"
              disabled
              value={`${buyurtma}   ${kg}`}
            />
          </div>
          <div className="bt">
            {menuOpen && <OshxonaMenu fudClick={fudClick} />}
            {fuds[0] && <Bar buyurtma1={buyurtma1} />}
            {fuds[1] && <Salat buyurtma1={buyurtma1} />}
            {fuds[2] && <Desert buyurtma1={buyurtma1} />}
            {fuds[3] && <Foods buyurtma1={buyurtma1} />}
          </div>
        </div>
        <div className="btnCalBlock">
          <div className="btn-group w-100">
            <button
              type="button"
              className="btn btn-dark btn-lg m-1"
              onClick={CalHandler}
            >
              1
            </button>
            <button
              type="button"
              className="btn btn-dark btn-lg m-1"
              onClick={CalHandler}
            >
              2
            </button>
            <button
              type="button"
              className="btn btn-dark btn-lg m-1"
              onClick={CalHandler}
            >
              3
            </button>
          </div>
          <div className="btn-group w-100">
            <button
              type="button"
              className="btn btn-dark btn-lg m-1"
              onClick={CalHandler}
            >
              4
            </button>
            <button
              type="button"
              className="btn btn-dark btn-lg m-1"
              onClick={CalHandler}
            >
              5
            </button>
            <button
              type="button"
              className="btn btn-dark btn-lg m-1"
              onClick={CalHandler}
            >
              6
            </button>
          </div>
          <div className="btn-group w-100">
            <button
              type="button"
              className="btn btn-dark btn-lg m-1"
              onClick={CalHandler}
            >
              7
            </button>
            <button
              type="button"
              className="btn btn-dark btn-lg m-1"
              onClick={CalHandler}
            >
              8
            </button>
            <button
              type="button"
              className="btn btn-dark btn-lg m-1"
              onClick={CalHandler}
            >
              9
            </button>
          </div>
          <div className="btn-group w-100">
            <button
              type="button"
              className="btn btn-dark btn-lg m-1"
              onClick={CalHandler}
            >
              .
            </button>
            <button
              type="button"
              className="btn btn-dark btn-lg m-1"
              onClick={CalHandler}
            >
              0
            </button>
            <button
              type="button"
              className="btn btn-dark btn-lg m-1"
              onClick={CloseFuds}
              disabled={buyurtma.length === 0 || kg.length === 0}
            >
              OK
            </button>
          </div>
          <div className="btn-group">
            <button className="btn btn-success" onClick={sendKitchen}>
              Send to the kitchen
            </button>
            <button className="btn btn-primary" onClick={xHandler}>
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
