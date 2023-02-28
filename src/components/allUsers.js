import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserRow from './UserRow';

class AllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stringUsers: [],
      cantidad: 0,
    };
  }

  apiCall(url, consecuencia) {
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => consecuencia(data))
      .catch(error => console.log(error));
  }

  componentDidMount() {
    console.log('Mounted');
    this.apiCall('http://localhost:3001/api/users/', this.mostrarUsuarios);
  }

  mostrarUsuarios = data => {
    this.setState({
      stringUsers: data.data,
      cantidad: data.count,
    });
  };

  componentDidUpdate() {
    console.log('Updated');
  }
  render() {
    console.log('Rendered');

    /*     let contenido;
    if (this.state.stringUsers === []) {
      contenido = <p>Cargando____...</p>;
    } else {
      contenido = (
        <tbody>
        <tr>

            {this.state.stringUsers.map((unUser, i) => (
              <td key={unUser + i}>
                {unUser.fullName} - {unUser.email} {' '}
              </td>
            ))}


        </tr>
        </tbody>
      );
    } */

    return (
      <div className="col-lg-10 mt-5 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Todos los usuarios registrados | Total: {this.state.cantidad}
            </h5>
          </div>
          <div className="card-body">
            <div className="text-center"></div>
            <div>
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing="0"
                >
                  <thead>
                    <th>ID</th>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Cantidad de Compras</th>
                    <th>Total Gastado</th>
                    <th>Rol</th>
                  </thead>
                  <tbody>
                    {this.state.stringUsers.map((unUser, i) => {
                      return <UserRow {...unUser} key={i} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <Link to="#" className="btn btn-warning">
              Cantidad total de usuarios: {this.state.stringUsers.length}
            </Link>
            {/* <a target="_blank" rel="nofollow" href="/">Cantidad total de usuarios: {this.state.stringUsers.length}</a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default AllUsers;
