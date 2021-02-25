import React, { useState, useEffect } from "react";
import "./FormAndPass.css";
export default function FormAndPass({ openOnePageHandler }) {
  const [pass, setPass] = useState("");
  const [isOk, setIsOk] = useState(false);
  const changlePass = (e) => {
    if (e.target.innerText === "DEL") return setPass("");
    if (e.target.innerText === "OK") {
      if (pass === "1233") openOnePageHandler();
      else {
        setIsOk(true);
        setTimeout(() => {
          setPass("");
          setIsOk(false);
        }, 3000);
      }
    } else {
      setPass(pass + e.target.innerText);
      setIsOk(false);
    }
  };
  useEffect(() => {
    if (pass === "This is a password error") setPass("");
  }, [pass]);
  return (
    <div className="form-and-pass">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6" id="password">
            <h1 className="text-center pt-5 text-danger px-4">
              Administrator Password
            </h1>
            <h2 className="display-4 text-center text-info my-3">
              {isOk ? (
                <span className="error">This is a password error</span>
              ) : (
                "*".repeat(pass.length) || (
                  <span className="no-error">Enter the password</span>
                )
              )}
            </h2>
            <div className="row">
              <div className="col-md-8 offset-2 mt-5">
                <div className="btn-group d-flex">
                  <button
                    onClick={changlePass}
                    className="btn btn-dark text-warning m-1 btn-lg"
                  >
                    1
                  </button>
                  <button
                    onClick={changlePass}
                    className="btn btn-dark text-warning m-1"
                  >
                    2
                  </button>
                  <button
                    onClick={changlePass}
                    className="btn btn-dark text-warning m-1"
                  >
                    3
                  </button>
                </div>
                <div className="btn-group d-flex">
                  <button
                    onClick={changlePass}
                    className="btn btn-dark text-warning m-1 btn-lg"
                  >
                    4
                  </button>
                  <button
                    onClick={changlePass}
                    className="btn btn-dark text-warning m-1"
                  >
                    5
                  </button>
                  <button
                    onClick={changlePass}
                    className="btn btn-dark text-warning m-1"
                  >
                    6
                  </button>
                </div>
                <div className="btn-group d-flex">
                  <button
                    onClick={changlePass}
                    className="btn btn-dark text-warning m-1 btn-lg"
                  >
                    7
                  </button>
                  <button
                    onClick={changlePass}
                    className="btn btn-dark text-warning m-1"
                  >
                    8
                  </button>
                  <button
                    onClick={changlePass}
                    className="btn btn-dark text-warning m-1"
                  >
                    9
                  </button>
                </div>
                <div className="btn-group d-flex">
                  <button
                    onClick={changlePass}
                    className="btn btn-dark text-warning m-1 btn-lg"
                  >
                    DEL
                  </button>
                  <button
                    onClick={changlePass}
                    className="btn btn-dark text-warning m-1"
                  >
                    0
                  </button>
                  <button
                    onClick={changlePass}
                    className="btn btn-dark text-warning m-1"
                    disabled={pass.length < 1}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6" id="form_img"></div>
        </div>
      </div>
    </div>
  );
}
