import React, { Component } from 'react';
import SalesRow from './SalesRow';

class AllSales extends Component {
  constructor() {
    super();
    this.state = {
      compras: [],
      cantidad: 0,
    };
  }
  componentDidMount() {
    fetch('http://localhost:3001/api/allSales')
      .then(res => res.json())
      .then(respuesta => {
        this.setState({
          compras: respuesta.data.compras,
          cantidad: respuesta.meta.totalVentas,
        });
      });
  }
  render() {
    return (
      <div className="col-lg-10 mt-5 ">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Ventas | Total: {this.state.cantidad}
            </h5>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Comprad@r</th>
                    <th>Email </th>
                    <th>Productos comprados</th>
                    <th>Cantidades</th>
                    <th>Precio Unitario</th>
                    <th>Precio Final</th>
                    <th>Método de Pago</th>
                    <th>Método de Envio</th>
                    <th>Fecha de compra</th>

                  </tr>
                </thead>

                <tbody>
                  {this.state.compras.map((venta, i) => (
                    <SalesRow key={i} {...venta} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AllSales;
