import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormAndPass from "./Component1/FormAndPass";
import OnePage from "./Component2/OnePage";
import LoadingX from "./Component1/Loading";
export default function App() {
  const [openOnePage, setOpenOnePage] = useState(false);
  // openOnePage false bulsa form kurinib turadi
  const openOnePageHandler = () => {
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
      setOpenOnePage(true);
    }, 1200);
  };
  const [loading, setLoading] = useState(true);
  if (!localStorage.data) localStorage.data = JSON.stringify([]);
  return (
    <>
      {openOnePage ? (
        <OnePage />
      ) : (
        (loading && (
          <FormAndPass openOnePageHandler={openOnePageHandler} />
        )) || <LoadingX />
      )}
    </>
  );
}
