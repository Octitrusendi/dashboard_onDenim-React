import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MasVendido extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
  }
  componentDidMount() {
    fetch('http://localhost:3001/api/masVendido')
      .then(res => res.json())
      .then(res => {
        this.setState({
          product: res.data,
        });
      });
  }
  render() {
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Producto más vendido
            </h5>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: '25rem' }}
                src={this.state.product.image}
                alt={this.state.product.name}
              />
            </div>
            <h3>
              {this.state.product.name} - ${this.state.product.finalPrice}
            </h3>
            <p>{this.state.product.description}</p>
           
            <a className="ml-2 btn btn-success"
              target="_blank"
              rel="noopener noreferrer nofollow"
              href={`http://localhost:3001/productos/detalle/${this.state.product.id}`}
            >
              Ver detalle del producto
            </a>
            <Link to="/AllProducts" className="ml-2 btn btn-warning">
              Ver todos los productos
            </Link>


          </div>
        </div>
      </div>
    );
  }
}
export default MasVendido;
