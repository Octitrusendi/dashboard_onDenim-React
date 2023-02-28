import React, { Component } from 'react';
import ProductRow from './ProductRow';

class DetailCategory extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cantidad: 0,
    };
  }
  componentDidMount() {
    fetch('http://localhost:3001/api/allProducts')
      .then(res => res.json())
      .then(respuesta => {
        this.setState({
          products: respuesta.data,
          cantidad: respuesta.meta.cuantity,
        });
      });
  }
  render() {
    return (
      <div className="col-lg-10 mt-5 ">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Todos los productos | Total: {this.state.cantidad}
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
                    <th>Nombre del Producto</th>
                    <th>Descripcion</th>
                    <th>Precio sin descuento</th>
                    <th>Descuento</th>
                    <th>Precio Final</th>
                    <th>Talles</th>
                    <th>Stock</th>
                    <th>¿New Collection?</th>
                    <th>Categoria</th>
                    <th>Total vendidos</th>
                    <th>Monto vendido</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.products.map((product, i) => (
                    <ProductRow key={i} {...product} />
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
export default DetailCategory;
