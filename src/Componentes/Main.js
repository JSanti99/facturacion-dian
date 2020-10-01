import React, { useState } from "react";
import BillNumber from "./BillNumber";
import Buyer from "./Buyer";
import Logo from "./Logo";
import Owner from "./Owner";
import { v4 } from "uuid";
import CUFE from "./CUFE";
import Qr from "./Qr";

const Main = () => {
  const numFactura = Math.floor(Math.random() * (1999999 - 1000000) + 1000000);
  const styles = {
    main: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
    },
    container: {
      width: "90%",
    },
  };

  return (
    <div style={styles.main}>
      <div style={styles.container}>
        <div className="row">
          <div className="col-6">
            <Logo />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <Owner />
              </div>
              <div className="col-6">{/* <Qr /> */}</div>
            </div>
            <div className="row">
              <div className="col">
                <BillNumber numero={numFactura} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Buyer />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <CUFE cufe={v4()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
