import React from "react";

const BillNumber = ({ numero }) => {
  return (
    <div class="alert alert-light" role="alert">
      <strong>Numero de factura: </strong> {numero}
    </div>
  );
};

export default BillNumber;
