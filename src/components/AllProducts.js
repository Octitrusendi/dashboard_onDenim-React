import React, { Component } from 'react';
import ProductRow from './ProductRow';


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
export default AllProducts;
