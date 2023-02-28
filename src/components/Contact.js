import React, { Component } from 'react';
import ContactRow from './ContactRow';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      contactos: [],
      cantidad: 0,
    };
  }
  componentDidMount() {
    fetch('http://localhost:3001/api/contact')
      .then(res => res.json())
      .then(respuesta => {
        this.setState({
          contactos: respuesta.data.contacto,
          cantidad: respuesta.meta.totalContactos,
        });
      });
  }
  render() {
    return (
      <div className="col-lg-10 mt-5 ">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Solicitudes de contacto | Total: {this.state.cantidad}
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
                    <th>Email de contacto</th>
                    <th>Consulta</th>
                    <th>Fecha de contacto</th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.contactos.map((contacto, i) => (
                    <ContactRow key={i} {...contacto} />
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
export default Contact;
