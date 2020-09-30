import React from "react";

const BillNumber = ({ numero }) => {
  return (
    <div className="alert alert-light" role="alert">
      <strong>Numero de factura: </strong> {numero}
    </div>
  );
};

export default BillNumber;
