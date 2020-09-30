import React, { useState } from "react";
import BillNumber from "./BillNumber";
import Buyer from "./Buyer";
import Logo from "./Logo";
import Owner from "./Owner";
import { v4 } from "uuid";
import CUFE from "./CUFE";
import Qr from "./Qr";
import Products from "./Products"

const Main = () => {
  const numFactura = Math.floor(Math.random() * (1999999 - 1000000) + 1000000);
  const v4QrCufe = v4();

  return (
    < >
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Logo />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <Owner />
              </div>
              <div className="col-6">{<Qr qr={v4QrCufe} />}</div>
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
            <Products/>
        <div className="row">
          <div className="col-12">
            <CUFE cufe={v4QrCufe} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
