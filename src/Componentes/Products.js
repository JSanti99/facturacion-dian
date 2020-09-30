import React, { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isAddProductSelected, setIsAddProductSelected] = useState(false);
  const [newProduct, setNewProduct] = useState({
    code: 0,
    quantity: 0,
    description: "",
    value: 0,
  });
  const [totalValue, setTotalValue] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      {isAddProductSelected && (
        <div>
          <div>
            <h2>Nuevo producto</h2>
          </div>
          <form>
            <div className="form-group">
              <div className="row mb-2">
                <div className="col-6">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text py-1">Codigo</div>
                    </div>
                    <input
                      type="number"
                      className="form-control"
                      name="code"
                      onChange={handleChange}
                      value={newProduct.code}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text py-1">Cantidad</div>
                    </div>
                    <input
                      type="number"
                      className="form-control"
                      name="quantity"
                      onChange={handleChange}
                      value={newProduct.quantity}
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-6">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text py-1">Descripcion</div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      name="description"
                      onChange={handleChange}
                      value={newProduct.description}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text py-1">
                        Valor Unitario
                      </div>
                    </div>
                    <input
                      type="number"
                      className="form-control"
                      name="value"
                      onChange={handleChange}
                      value={newProduct.value}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => {
                const productsList = products;
                productsList.push({
                  item: products.length + 1,
                  code: newProduct.code,
                  description: newProduct.description,
                  quantity: newProduct.quantity,
                  value: newProduct.value,
                });
                setProducts(productsList);
                setTotalValue(
                  totalValue + newProduct.value * newProduct.quantity
                );
                setNewProduct({
                  code: 0,
                  quantity: 0,
                  description: "",
                  value: 0,
                });
                setIsAddProductSelected(false);
              }}
            >
              Agregar producto
            </button>
          </div>
        </div>
      )}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Codigo</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Vr. Unitario</th>
            <th scope="col">Impto. Cargo</th>
            <th scope="col">Vr. Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{e.item}</th>
                <td>{e.code}</td>
                <td>{e.description}</td>
                <td>{e.quantity}</td>
                <td>{e.value}</td>
                <td>19 %</td>
                <td>{e.value * e.quantity}</td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <th scope="row">Valor Total</th>
            <td>{totalValue}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <th scope="row">Iva 19%</th>
            <td>{totalValue * 0.19}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <th scope="row">Tota a pagar</th>
            <td>{totalValue + totalValue * 0.19}</td>
          </tr>
        </tbody>
      </table>
      {!isAddProductSelected && (
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => {
              setIsAddProductSelected(true);
            }}
          >
            Agregar producto
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
