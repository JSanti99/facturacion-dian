import React from "react";
import QrCode from "qrcode.react";
const Qr = ({ qr }) => {
  return (
    <div>
      <QrCode value={qr} />
    </div>
  );
};

export default Qr;
