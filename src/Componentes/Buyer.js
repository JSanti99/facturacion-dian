import React, { useState } from "react";

const Buyer = () => {
  const [buyerData, setBuyerData] = useState({
    senores: "",
    cedula: 0,
    telefono: 0,
    direccion: "",
    ciudad: "",
    fechaFactura: "",
    fechaVencimiento: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyerData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <form>
      <div className="form-group">
        <div className="row mb-2">
          <div className="col-12">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text py-1">Señores</div>
              </div>
              <input
                type="text"
                className="form-control"
                name="senores"
                onChange={handleChange}
                value={buyerData.senores}
              />
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-6">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text py-1">Cedula</div>
              </div>
              <input
                type="number"
                className="form-control"
                name="cedula"
                onChange={handleChange}
                value={buyerData.cedula}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text py-1">Telefono</div>
              </div>
              <input
                type="number"
                className="form-control"
                name="telefono"
                onChange={handleChange}
                value={buyerData.telefono}
              />
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-6">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text py-1">Direccion</div>
              </div>
              <input
                type="text"
                className="form-control"
                name="direccion"
                onChange={handleChange}
                value={buyerData.direccion}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text py-1">Ciudad</div>
              </div>
              <input
                type="text"
                className="form-control"
                name="ciudad"
                onChange={handleChange}
                value={buyerData.ciudad}
              />
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-6">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text py-1">Fecha factura</div>
              </div>
              <input
                type="text"
                className="form-control"
                name="fechaFactura"
                onChange={handleChange}
                value={buyerData.fechaFactura}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text py-1">Fecha vencimiento</div>
              </div>
              <input
                type="text"
                className="form-control"
                name="fechaVencimiento"
                onChange={handleChange}
                value={buyerData.fechaVencimiento}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Buyer;
