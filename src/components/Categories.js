import React, { Component } from 'react';
import Category from './Category';


class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      cantidad: '',
    };
  }
  componentDidMount() {
    fetch('http://localhost:3001/api/categories')
      .then(res => res.json())
      .then(respuesta => {
        this.setState({
          categories: respuesta.data,
          cantidad: respuesta.meta.totalItems,
        });
      });
  }
  render() {
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow h-100 mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Categorias Actuales ({this.state.cantidad})
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              {this.state.categories.map((category, i) => (
                <div className="col-6mb-2" key={i}>
                  <Category>
                    {category.name} ({category.productsCount} productos)
                  </Category>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Categories;
