import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import NewOrder from "./NewOrder";
import AboutPage from "./AboutPage";
import List from "./List";
import Menu from "./Menu";

import "./one.css";
export default function OnePage() {
  const [data, setData] = useState("10:49:44 PM");
  useEffect(() => {
    setTimeout(() => {
      setData(new Date().toLocaleTimeString());
    }, 1000);
  });
  const [act, setAct] = useState(true);
  const activeHandler = (e) => {
    setAct(false);
    e.target.classList.add("active");
    const w = document.querySelectorAll(".btn-outline-primary");
    let indexI = null;
    [...w].forEach((item, index) => {
      if (item.classList === e.target.classList) indexI = index;
    });
    setArr((oldArr) =>
      oldArr.map((item, index) => {
        if (indexI === index) return true;
        return false;
      })
    );
  };

  const [arr, setArr] = useState([true, false, false, false, false]);
  return (
    //HTML code
    <div className="BIGcontaneir">
      <div className="topBlock">
        <div className="Block">
          <h4 className="data">{data}</h4>
        </div>
        <div className="Block">
          <h3>SAMARQAND ART</h3>
        </div>
        <div className="Block">
          <h3>User Name</h3>
          <span>
            <i className="fas fa-user-check"></i>
          </span>
        </div>
      </div>

      <div className="centerBlock">
        <div className="LeftBlock">
          <div className="btnGroup">
            <button
              className={`btn btn-outline-primary ${act && "active"}`}
              onClick={activeHandler}
              onBlur={(e) => e.target.classList.remove("active")}
            >
              Home Page
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={activeHandler}
              onBlur={(e) => e.target.classList.remove("active")}
            >
              About Page
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={activeHandler}
              onBlur={(e) => e.target.classList.remove("active")}
            >
              New Order
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={activeHandler}
              onBlur={(e) => e.target.classList.remove("active")}
            >
              List of Order
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={activeHandler}
              onBlur={(e) => e.target.classList.remove("active")}
            >
              Menu
            </button>
          </div>
          <div className="photoBottom"></div>
        </div>

        {/* photo lifet bottom */}

        {/* ifrem div */}
        <div className="ifrem">
          {arr[0] && <HomePage />}
          {arr[1] && <AboutPage />}
          {arr[4] && <Menu />}
          {arr[3] && <List />}
          {arr[2] && <NewOrder />}
          {arr[0] && <div className="iconUn"></div>}
        </div>
      </div>
    </div>
  );
}
